import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import stremNYC from '../../public/images/projects/python_streamlit_nyc.JPG.png'
import stremNYCDark from '../../public/images/projects/python_streamlit_nyc_dark.JPG.png'

const Project = () => {
  return (
    <Layout title="Streamlit Analysis">
      <Container>
        <Title>
          Data analysis of NYC Rental Market<Badge ml={'15px'}>2022</Badge>
        </Title>
        <P>
          A static analysis of of the NYC rental market in March 2022 using
          Python and Streamlit. This project was undertaken while working as a
          data science intern at Crelytica. <br /> <br /> I am so grateful for
          my time on this project as it was this that confirmed how much I love
          talking to computers, and wrangling them into doing what I ask! <br />
          <br /> The aim of this project was to help recent graduates identify
          where to focus their search for an appartment shortly after
          graduating. It was interesting learning to use Streamlit&apos;s suite
          of analysis tools, as well as working with geospatial data
          representation via PyDeck.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://skandog-columns-column-tut-clean-91kzmb.streamlitapp.com/"
              target={'_blank'}
            >
              Streamlit App <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Streamlit, Pandas, PyDeck</span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage
          src={useColorModeValue(stremNYC.src, stremNYCDark.src)}
          alt="streamlit analysis of nyc rental market"
        />
      </Container>
    </Layout>
  )
}

export default Project
