import NextLink from 'next/link'
// import { Image } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { motion } from 'framer-motion'

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
        <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
          <Text mt={2}>{title}</Text>
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
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          objectFit={'cover'}
          minH={'160px'}
        />
        <LinkOverlay as={NextLink} href={`/projects/${id}`} scroll={false}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
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
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          objectFit={'cover'}
          minH={'160px'}
        />
        <LinkOverlay as={NextLink} href={`/bakes/${id}`} scroll={false}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
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
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as={NextLink} href={`/thanks/${id}`} scroll={false}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
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
