import React from 'react'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('green.700', 'green.400')}
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
          align="center"
        >
          <Image
            borderColor={useColorModeValue('green.700', 'green.400')}
            borderWidth={3}
            borderStyle="solid"
            maxWidth="100px"
            display={'inline-block'}
            borderRadius="full"
            src="/images/skn.JPG"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Skandy is a software developer with a love for growth and embracing
          new challenges. Born and raised in London, he lives with his partner,
          pizzas and plants 🌱. When not at the keyboard he enjoys trying new
          recipes and sharing them with his friends and family. Currently he is
          expanding his abilty to build beautiful full-stack applications with
          The School of Code, while working freelance and open to full time roles.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
