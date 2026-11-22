import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Separator,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Separator my={6} />

      <Box my={6} align="center">
        <Button asChild colorPalette="teal">
          <NextLink href="/">Return to home</NextLink>
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
