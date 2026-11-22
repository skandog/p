import React from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  Button,
  List,
  SimpleGrid
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { motion } from 'framer-motion'

// This is the homepage of the website, with all of the key info

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          // as={motion.div}
          borderRadius="lg"
          bg={{ base: 'purple.500', _dark: 'green.400' }}
          color="whiteAlpha.800"
          p={3}
          mt={10}
          mb={6}
          align="center"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ rotate: 45 }}
          // cursor="pointer"
        ></Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Alexander &apos;Skandy&apos; Rattray
            </Heading>
            <p>Software Developer / Bug Hunter</p>
            {/* <Image src={dogImg} width={200} height={150} alt="logo" /> */}
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="left"
          >
            <Image
              as={motion.img}
              whileHover={{ rotate: 360 }}
              borderColor={{ base: 'purple.500', _dark: 'green.400' }}
              borderWidth={3}
              borderStyle="solid"
              maxWidth="150px"
              display={'inline-block'}
              borderRadius="lg"
              src="/images/skn.JPG"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>

          <Paragraph style={{ fontSize: '1.18rem' }}>
            <Link
              href="https://en.wikipedia.org/wiki/Iskandar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skandy
            </Link>{' '}
            is a full stack dev who loves building beautiful applications and
            cooking up a storm in the kitchen. His strong sense of community and
            commitment to building meaningful relationships are just two of the
            many qualities that make him stand out as a developer. <br />
            <br />
            Born and raised in South London, he lives there currently with his
            partner, tending to his pizzas and plants 🌱. When not at the
            keyboard he enjoys trying new recipes and sharing the output with
            his friends and family. Whatever he is doing, coding or otherwise,
            Skandy approaches every challenge with purpose and a positive
            attitude.
            <br />
          </Paragraph>
          <Box align="left" my={4}>
            <Button asChild colorPalette={{ base: 'purple', _dark: 'green' }}>
              <NextLink href="/projects" scroll={false}>
                Projects <FiChevronRight aria-hidden="true" />
              </NextLink>
            </Button>
          </Box>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} columnGap="10%">
          <Section delay={0.2}>
            <Heading as="h3" variant={'section-title'}>
              Bio
            </Heading>
            <BioSection>
              <BioYear>1999</BioYear>
              Won egg and spoon race at school sports day.
            </BioSection>
            <BioSection>
              <BioYear>2008</BioYear>
              Began working as cocktail bartender.
            </BioSection>
            <BioSection>
              <BioYear>2014</BioYear>
              Completed Bachelor of Science with Honors degree in Mathematics at
              the Universtiy of Glasgow.
            </BioSection>
            <BioSection>
              <BioYear>2015</BioYear>
              Worked in customer success at fintech startup Dext.
            </BioSection>
            <BioSection>
              <BioYear>2017</BioYear>
              Worked in project management at the Institution of Mechanical
              Engineers.
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Undertook Data Science Internship with Crelytica.
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Graduated School of Code Full-Stack Development course.
            </BioSection>
            <BioSection>
              <BioYear>2023</BioYear>
              Currently working full time as an Application Developer with{' '}
              <Link
                href="https://www.aimltd.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aim Ltd
              </Link>
              .
            </BioSection>
            <Box align="left" my={4}>
              <Button asChild colorPalette={{ base: 'purple', _dark: 'green' }}>
                <a
                  href="https://www.linkedin.com/in/arattray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <FiChevronRight aria-hidden="true" />
                  Career
                </a>
              </Button>
            </Box>
          </Section>
          <SimpleGrid columns={1} rowGap="12%">
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                I ♥
              </Heading>
              <Paragraph>
                Cooking, Baking, Fermenting, Bouldering, Running, Making Music,
                Skateboarding, Karaoke, History, Photography
              </Paragraph>
            </Section>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                Also find me here
              </Heading>
              <List.Root>
                <List.Item>
                  <Button asChild variant="ghost" colorPalette="teal">
                    <a
                      href="https://github.com/skandog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub aria-hidden="true" />
                      @skandog
                    </a>
                  </Button>
                </List.Item>
                <List.Item>
                  <Button asChild variant="ghost" colorPalette="teal">
                    <a
                      href="https://twitter.com/skandog_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoTwitter aria-hidden="true" />
                      @skandog_
                    </a>
                  </Button>
                </List.Item>
                <List.Item>
                  <Button asChild variant="ghost" colorPalette="teal">
                    <a
                      href="https://www.linkedin.com/in/arattray/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin aria-hidden="true" />
                      @arattray
                    </a>
                  </Button>
                </List.Item>
              </List.Root>
            </Section>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Page
