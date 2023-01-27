import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import pomFocus1 from '../../public/images/projects/pomfocus1.jpg'
import pomFocus3 from '../../public/images/projects/pomfocus3.jpg'
import pomFocus4 from '../../public/images/projects/pomfocus4.jpg'

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
        </P>
        <List ml={4} my={2}>
          {/* // Leaving this here for when its avaialble for d/l
          <ListItem>
            <Meta>Website</Meta>
            <Link href="" target={'_blank'}>
              Homepage <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem> */}
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/skandog/pomfocus" target={'_blank'}>
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, React.js, React Native, Expo, Async Storage</span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage src={pomFocus1.src} alt="PomFocus Homepage Screen" />
        {/* <ProjectImage src={pomFocus2.src} alt="Portfolio Front Page" /> */}
        <ProjectImage src={pomFocus3.src} alt="PomFocus Timer Screen" />
        <ProjectImage src={pomFocus4.src} alt="Focus History Screen" />
      </Container>
    </Layout>
  )
}

export default Project
