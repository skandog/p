import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import stremNYC from '../../public/images/projects/python_streamlit_nyc.JPG.png'
import stremNYCDark from '../../public/images/projects/python_streamlit_nyc_dark.JPG.png'

const Project = () => {
  return (
    <Layout title="streamlit_nyc">
      <Container>
        <Title>
          Data analysis of NYC Rental Market <Badge>2022</Badge>
        </Title>
        <P>
          A static analysis of of the NYC rental market in March 2022 using
          Python and Streamlit. The aim of this project was to assist recent
          graduates know where to focus their search for an appartment shortly
          after graduating.
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

        <ProjectImage
          src={useColorModeValue(stremNYC.src, stremNYCDark.src)}
          alt="streamlit analysis of nyc rental market"
        />
      </Container>
    </Layout>
  )
}

export default Project
