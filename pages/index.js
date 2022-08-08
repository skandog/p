import React from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  useColorModeValue,
  Image,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Page = () => {
  // const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Layout>
      <Container>
        <Box
          as={motion.div}
          borderRadius="lg"
          bg={useColorModeValue('green.700', 'green.400')}
          color="whiteAlpha.800"
          p={3}
          mt={10}
          mb={6}
          align="center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotate: 45 }}
          cursor="pointer"
        >
          Hello, I&apos;m a full-stack developer based in London!
        </Box>
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
            align="center"
          >
            <Image
              as={motion.img}
              whileHover={{ rotate: 180 }}
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
            Skandy is a software developer with a love for growth, making
            things, and embracing new challenges. Born and raised in South
            London, he lives there currently with his partner, tending to his
            pizzas and plants 🌱. When not at the keyboard he enjoys trying new
            recipes then sharing the output with his friends and family.
            Currently he is developing his abilty to build beautiful full-stack
            applications.
          </Paragraph>
          <Box align="left" my={4}>
            <NextLink href="/projects">
              <Button
                as={motion.button}
                whileHover={{ scale: 1.2 }}
                rightIcon={<ChevronRightIcon />}
                colorScheme="green"
              >
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
            <BioYear>1999</BioYear>
            Won egg and spoon race at school sports day
          </BioSection>

          {/* <BioSection>
            <BioYear>2009</BioYear>
            Won gold in scotland inter-university trampolene competiton
          </BioSection> */}

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
            Cooking, Skateboarding, Running, Fermenting, Traveling, History,
            Photography
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Also find me here
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/skandog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @skandog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/skandog_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @skandog_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/arattray/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @arattray
                </Button>
              </Link>
            </ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
