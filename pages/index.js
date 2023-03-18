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
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { motion } from 'framer-motion'

// This is the homepage of the website, with all of the key info

const Page = () => {
  // const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Layout>
      <Container maxW="2xl">
        <Box
          // as={motion.div}
          borderRadius="lg"
          bg={useColorModeValue('purple.500', 'green.400')}
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
              borderColor={useColorModeValue('purple.500', 'green.400')}
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
            <NextLink href="https://en.wikipedia.org/wiki/Iskandar" passHref>
              <Link target="_blank">Skandy</Link>
            </NextLink>{' '}
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
            <NextLink href="/projects">
              <Button
                as={motion.button}
                whileHover={{ scale: 1.2 }}
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('purple', 'green')}
              >
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} spacingX={'10%'}>
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
              <BioYear>Currently</BioYear>
              Working full time as an Application Developer with{' '}
              <NextLink passHref href="https://www.aimltd.uk/">
                <Link target="_blank">Aim Ltd</Link>
              </NextLink>
              .
            </BioSection>
            <Box align="left" my={4}>
              <NextLink href="https://www.linkedin.com/in/arattray/" passHref>
                <Link target="_blank" style={{ textDecoration: 'none' }}>
                  <Button
                    as={motion.button}
                    whileHover={{ scale: 1.2 }}
                    rightIcon={<ChevronRightIcon />}
                    colorScheme={useColorModeValue('purple', 'green')}
                  >
                    Career
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Section>
          <SimpleGrid columns={1} spacingY="12%">
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
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Page
