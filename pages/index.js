import React from 'react'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
const Page = () => {
  const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="green.700"
        color="whiteAlpha.800"
        p={3}
        mt={10}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in London!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Skandy Rattray
          </Heading>
          <p>Professional Bug Hunter / Developer</p>
          {/* <Image src={dogImg} width={200} height={150} alt="logo" /> */}
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="centre"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display={'inline-block'}
            borderRadius="full"
            src="/images/skn.JPG"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Box></Box>
    </Container>
  )
}

export default Page
