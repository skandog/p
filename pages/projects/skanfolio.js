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
import skanfolioLight from '../../public/images/projects/skanfolio_light.png'
import skanfolioDark from '../../public/images/projects/skanfolio_dark.png'

const Project = () => {
  return (
    <Layout title="Skanfolio">
      <Container>
        <Title>
          Skanfolio - Portfolio Page <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          This was a project I undertook in order to practice my ability in
          building beautiful websites. I also wanted to learn new technologies
          as part of the process, so decided to use Next.js for the first time.
          <br /> <br />I decided to follow a tutorial by Takuya Matsuyama, whose
          eye for design is enviable. The style of his videos is extremely
          challenging however, as there is no narritive provided to any
          decision. As a result I was forced to go away an research nearly every
          keystroke. This process, however, while frustrating at times was
          immensely valuable as I have come out the end feeling confident in my
          ability to use the full tech stack invoved in the project. I spent a
          long time experiementing and further understanding both Framer-Motion
          and Chakra-UI. <br />
          <br />
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://p-skandog.vercel.app/" target={'_blank'}>
              Homepage <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Javascript, React.js, Next.js, Chakra-UI, Framer-Motion, Emotion
            </span>
          </ListItem>
        </List>

        <ProjectImage
          src={useColorModeValue(skanfolioDark.src, skanfolioLight.src)}
          alt="streamlit analysis of nyc rental market"
        />
      </Container>
    </Layout>
  )
}

export default Project
