import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph.js'
import botLight from '../../public/images/projects/skandog-dev-twitter-bot-light.png'
import botDark from '../../public/images/projects/skandog-dev-twitter-bot-dark.png'

const Project = () => {
  return (
    <Layout title={'Twitter Bot'}>
      <Container>
        <Title>
          SkandogDev Twitter Bot
          <Badge ml={'15px'}>2022</Badge>
        </Title>
        <P>
          This was a project I had wanted to do for a long time. Writing a
          program that is automated to complete tasks is so cool!
          <br />
          <br />
          This was a great project to help me refresh my Python skills after
          completing the intensive bootcamp focused on JavaScript and
          TypeScript.
          <br />
          <br />
          The design of this bot is rather simple, with the task of cheering on
          other Twitter users who are learning to code. It does this by
          accessing the Twitter POST endpoints for liking and retweeting
          statuses from users tweeting certain keywords. When I first started
          tweeting the #100DaysOfCode tag, I marvelled at the automated accounts
          that would interact with my post. It felt like a million miles away
          for me. So I was excited to possibly provide that inspiration to
          others, and show it is not so far away.
          <br />
          <br />
          

        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Automated Bot</Meta>
            <Link href="https://twitter.com/sdogdev" target={'_blank'}>
              Profile Page <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/skandog/soc_cheer_leader"
              target={'_blank'}
            >
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Tweepy, Dotenv, Regex, Twitter API</span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage
          src={useColorModeValue(botDark.src, botLight.src)}
          alt="Twitter Bot Profile Page"
        />
      </Container>
    </Layout>
  )
}

export default Project
