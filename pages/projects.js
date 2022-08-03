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
import skandy from '../public/images/skandy-logo-v3.png'
import skandyDark from '../public/images/skandy-logo-dark-v3.png'
import stremNYC from '../public/images/python_streamlit_nyc.JPG.png'
import stremNYCDark from '../public/images/python_streamlit_nyc_dark.JPG.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  console.log('skandy :>> ', skandy)

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
          Here is some of my favourite work
        </Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            {/* {useColorModeValue(skandy.src, skandyDark)} */}
            <WorkGridItem
              id="skandy"
              title="Skandy"
              thumbnail={useColorModeValue(skandy.src, skandyDark.src)}
            >
              A skandy app
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="Streamlit Analysis of NYC"
              alt="Streamlit Analysis of NYC"
              thumbnail={useColorModeValue(stremNYC.src, stremNYCDark.src)}
            >
              Data science project using Python and Streamlit to analyse data on
              the NYC Real Estate market in 2022, with a view to providing
              information to recent graduates on the most affordable areas for
              them to target.
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
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="skandy"
              title="Skandy"
              thumbnail={useColorModeValue(skandy.src, skandyDark.src)}
            >
              A skandy app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={8} />
      </Container>
    </Layout>
  )
}

export default Projects
