#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images')
const write = process.argv.includes('--write')
const maxDimension = 2400
const jpegQuality = 82

const rasterExtensions = new Set(['.jpg', '.jpeg', '.png'])

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(file)))
    else if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(file)
    }
  }
  return files
}

const files = await walk(root)
let changed = 0
let before = 0
let after = 0

for (const file of files) {
  const metadata = await sharp(file).metadata()
  const width = metadata.width ?? 0
  const height = metadata.height ?? 0
  const largest = Math.max(width, height)
  const needsResize = largest > maxDimension

  if (!needsResize) continue

  const input = await fs.stat(file)
  const pipeline = sharp(file).rotate().resize({
    width: maxDimension,
    height: maxDimension,
    fit: 'inside',
    withoutEnlargement: true
  })

  const extension = path.extname(file).toLowerCase()
  if (extension === '.jpg' || extension === '.jpeg') {
    pipeline.jpeg({ quality: jpegQuality, progressive: true, mozjpeg: true })
  } else {
    pipeline.png({ compressionLevel: 9, palette: true })
  }

  const optimized = await pipeline.toBuffer()
  if (write) {
    const temporary = `${file}.tmp`
    await fs.writeFile(temporary, optimized)
    await fs.rename(temporary, file)
  }

  before += input.size
  after += optimized.byteLength
  changed += 1
  const optimizedMetadata = await sharp(optimized).metadata()
  console.log(
    `${path.relative(process.cwd(), file)}: ${width}x${height} -> ${optimizedMetadata.width}x${optimizedMetadata.height} (${input.size} -> ${optimized.byteLength} bytes)`
  )
}

console.log(
  `${write ? 'Optimized' : 'Would optimize'} ${changed} files; ${before} -> ${after} bytes (${before === 0 ? '0.0' : ((1 - after / before) * 100).toFixed(1)}% reduction)`
)
