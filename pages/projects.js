import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import stremNYC from '../public/images/projects/python_streamlit_nyc.JPG.png'
import stremNYCDark from '../public/images/projects/python_streamlit_nyc_dark.JPG.png'
import skanfolioLight from '../public/images/projects/skanfolio_light.png'
import skanfolioDark from '../public/images/projects/skanfolio_dark.png'
import backpack from '../public/images/projects/backpack.jpg'
import foodbank from '../public/images/projects/ff.png'
import botLight from '../public/images/projects/skandog-dev-twitter-bot-light.png'
import botDark from '../public/images/projects/skandog-dev-twitter-bot-dark.png'
import weatherApp from '../public/images/projects/four-hour-weather-app.png'
import sneakers from '../public/images/projects/sneakers1.JPG'
import mitroLight from '../public/images/projects/mitro_light1.JPG'
import mitroDark from '../public/images/projects/mitro_dark1.JPG'

const Projects = () => {
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
        >
          {/* Here is some of my favourite work */}
        </Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="skanfolio"
              alt="Portfolio Site"
              title="Skanfolio"
              thumbnail={useColorModeValue(
                skanfolioDark.src,
                skanfolioLight.src
              )}
            >
              Portfolio website built with React.js, Next.js, Chakra-UI and
              more.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="streamlit_nyc"
              alt="Streamlit Analysis of NYC"
              title="Streamlit Analysis of NYC"
              thumbnail={useColorModeValue(stremNYC.src, stremNYCDark.src)}
            >
              Data science project using Python and Streamlit to analyse the NYC
              Real Estate market.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="twitterbot"
              alt="SkandogDev Automated Twitter Bot"
              title="SkandogDev Twitter Bot"
              thumbnail={useColorModeValue(botDark.src, botLight.src)}
            >
              Automated Twitter bot to explore the API and automation using
              Python.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="four-hour-weather"
              alt="Weather Forecast App Built in Four Hours"
              title="Five Day Weather Forecast"
              thumbnail={weatherApp.src}
            >
              Frontend challenge to build weather app in four hours.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="sneakers"
              alt="Vanilla JS Eccomerce Site"
              title="Vanilla JavaScript Eccommerce"
              thumbnail={sneakers.src}
            >
              Ecommerce template built to practice fundemental skills in HTML,
              SCSS and JavaScript.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="mitro"
              alt="PHP Twitter Fan Bot"
              title="Mitro Fanclub Twitter Bot"
              thumbnail={useColorModeValue(mitroDark.src, mitroLight.src)}
            >
              Automated Twitter bot project to consolidate recent learning in
              PHP.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.3}>
          <Divider
            as={motion.hr}
            my={8}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          />
        </Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Collabs
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <WorkGridItem
              id="foodbankfinder"
              title="Foodbank Finder"
              thumbnail={foodbank.src}
            >
              Four-week team project with an open brief. We created an app
              designed to help foodbanks and their communities.
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="backpack"
              title="Backpack"
              thumbnail={backpack.src}
            >
              One-week team project to build an app to help other bootcamp
              students.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
