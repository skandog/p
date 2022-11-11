import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
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
          This was a project I undertook to practice building beautiful
          websites. I also wanted to learn as part of the process, so decided to
          use Next.js for the first time.
          <br /> <br />
          Referring to a tutorial by
          <NextLink href="https://twitter.com/craftzdog" passHref>
            <Link target={'_blank'}> Takuya Matsuyama</Link>
          </NextLink>
          , whose eye for design is incredible. The style of his videos is
          extremely challenging however, as there is no narritive provided to
          any decision. As a result I was forced to go away an research nearly
          every keystroke. This process, however, while frustrating at times was
          immensely valuable as I came out the end feeling confident in my
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
            <Meta>Source Code</Meta>
            <Link href="https://github.com/skandog/p" target={'_blank'}>
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Javascript, React.js, Next.js, Chakra-UI, Framer-Motion, Emotion
            </span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage
          src={useColorModeValue(skanfolioDark.src, skanfolioLight.src)}
          alt="Portfolio Front Page"
        />
      </Container>
    </Layout>
  )
}

export default Project
