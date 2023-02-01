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
          An interactive application which provides the insight from a static
          analysis of of the NYC rental market in March 2022, primarily using
          Python and Streamlit. I undertook this project as part of my Data
          Science internship at Crelytica. <br /> <br /> I loved my time working
          at Crelytica and working on this project, and I am immensely grateful
          for the opportunity as it helped to confirm how much I love talking to
          computers, and wrangling them into doing what I ask! <br />
          <br /> The aim of this project was to help recent graduates identify
          where to focus their search for an apartment shortly after graduating.
          It was interesting learning to use Streamlit&apos;s suite of analysis
          tools, as well as working with geospatial data representation via
          PyDeck. 
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
            <Meta>Source Code</Meta>
            <Link href="https://github.com/skandog/columns" target={'_blank'}>
              Github <ExternalLinkIcon mx={'2px'} />
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
