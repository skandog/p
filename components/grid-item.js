import NextLink from 'next/link'
// import { Image } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/projects/${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
export const BakeGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/bakes/${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/bakes/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
        max-height: 150px;
        width:100%;
        object-fit: cover; 
    }
    `}
    />
  )
}
