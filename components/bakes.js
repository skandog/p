import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { IoChevronForward } from 'react-icons/io5'

export const Title = ({ children }) => {
  return (
    <Box>
      <Link asChild>
        <NextLink href="/bakes">Bakes</NextLink>
      </Link>
      <span>
        &nbsp;
        <IoChevronForward aria-hidden="true" />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const BakeImage = ({ src, alt }) => {
  return <Image borderRadius={'lg'} w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => {
  return (
    <Badge colorPalette="green" mr={2}>
      {children}
    </Badge>
  )
}
