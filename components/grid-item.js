import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Thumbnail = ({ src, alt, ratio }) => (
  <Box
    position="relative"
    aspectRatio={ratio}
    overflow="hidden"
    borderRadius="12px"
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 48rem) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
    />
  </Box>
)

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Thumbnail src={thumbnail} alt={title} ratio={16 / 9} />
        <LinkOverlay asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Text mt={2}>{title}</Text>
          </a>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      w="100%"
      textAlign="left"
    >
      <LinkBox cursor="pointer">
        <Thumbnail src={thumbnail} alt={title} ratio={16 / 9} />
        <LinkOverlay asChild>
          <NextLink href={`/projects/${id}`} scroll={false}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </NextLink>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
export const BakeGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      w="100%"
      textAlign="left"
    >
      <LinkBox cursor="pointer">
        <Thumbnail src={thumbnail} alt={title} ratio={4 / 3} />
        <LinkOverlay asChild>
          <NextLink href={`/bakes/${id}`} scroll={false}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </NextLink>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
export const ThanksGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Thumbnail src={thumbnail} alt={title} ratio={16 / 9} />
        <LinkOverlay asChild>
          <NextLink href={`/thanks/${id}`} scroll={false}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </NextLink>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
