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
import skandy from '../public/images/skandy-logo-v3.png'
// import skandyDark from '../public/images/skandy-logo-dark-v3.png'
import stremNYC from '../public/images/projects/python_streamlit_nyc.JPG.png'
import stremNYCDark from '../public/images/projects/python_streamlit_nyc_dark.JPG.png'
import skanfolioLight from '../public/images/projects/skanfolio_light.png'
import skanfolioDark from '../public/images/projects/skanfolio_dark.png'

const Projects = () => {
  console.log('skandy :>> ', skandy)

  return (
    <Layout>
      <Container>
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
          <Section delay={0.2}>
            <WorkGridItem
              id="streamlit_nyc"
              alt="Streamlit Analysis of NYC"
              title="Streamlit Analysis of NYC"
              thumbnail={useColorModeValue(stremNYC.src, stremNYCDark.src)}
            >
              Data science project using Python and Streamlit to analyse data on
              the NYC Real Estate market in 2022.
            </WorkGridItem>
          </Section>
          {/* <Section delay={0.2}>
            <WorkGridItem
              id="skandy"
              title="Skandy"
              thumbnail={useColorModeValue(skandy.src, skandyDark.src)}
            >
              A skandy app
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="skandy"
              title="Skandy"
              thumbnail={useColorModeValue(skandy.src, skandyDark.src)}
            >
              A skandy app
            </WorkGridItem>
          </Section> */}
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
      </Container>
    </Layout>
  )
}

export default Projects
