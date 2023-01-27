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
          PomFocus - Productivity App <Badge ml={'10px'}>2023</Badge>
        </Title>
        <P>
          I have been wanting to learn React Native for ages now and have
          previously found that building an app for my own use is the best way
          to embed new knowledge. As a huge proponent of the{' '}
          <NextLink
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            passHref
          >
            <Link target={'_blank'}>Pomodoro Technique</Link>
          </NextLink>
          , using this in my daily flow to optimise my focus, I chose to build a
          Pomodoro timer app. <br /> <br />
          The most challenging aspect of mobile development, I have found, is
          managing the environments. As such I used Expo to build the app, which
          made it easy to get up and running quickly. Unfortunately the app is
          not yet available for download, but I plan to continue learning and
          release it in the future.
          <br /> <br />
          This project was a lot of fun to build as I am a big sci-fi fan and
          decided to style it with a space background and neon theme. I also
          created a custom hook to check whether the keyboard is open so that I
          can change the number of items shown in the focus history.
          <br />
          <br />
          I spent a long time after experimenting to further understand the
          possibilities presented by these tools, and truly make the site my
          own. And I continue to update the site regularly with new content and
          functionality. <br />
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
