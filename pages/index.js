import React from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  useColorModeValue,
  Image,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import styled from '@emotion/styled'

const Page = () => {
  const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Layout>
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
          {/* <p style={{ 'text-align': 'justify', 'text-indent': '1em' }}>
          Skandy is a software developer with a love for growth and embracing
          new challenges. Born and raised in London, he lives with his partner,
          pizzas and plants 🌱. When not at the keyboard he enjoys trying new
          recipes and sharing them with his friends and family. Currently he is
          expanding his abilty to build beautiful full-stack applications with
          School of Code, while working freelance and open to full time roles.
        </p> */}

          <Paragraph>
            Skandy is a software developer with a love for growth, making
            things, and embracing new challenges. Born and raised in London, he
            lives with his partner, pizzas and plants 🌱. When not at the
            keyboard he enjoys trying new recipes then sharing the output with
            his friends and family. Currently he is developing his abilty to
            build beautiful full-stack applications.
          </Paragraph>
          <Box align="left" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            Born in London, United Kingdom
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Completed Bachelor of Science with Honors degree in Mathematics at
            the universtiy of Glasgow.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Undertook Data Science Internship at Crelytica.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduated School of Code Full-Stack Development course.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working freelance and open to full time roles.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Cooking, Skateboarding, Running, Fermenting, Traveling
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
