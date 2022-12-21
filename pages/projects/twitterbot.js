import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Divider,
  Heading
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
          This was a project I had wanted to do for a long time as it would help
          me to flex my Python skills after completing the intensive bootcamp
          focused on JavaScript, TypeScript, Node and React.
          <br />
          <br />
          The design of this bot is rather simple, with the task of cheering on
          other Twitter users who are learning to code. It does this by
          accessing the Twitter POST endpoints for liking and retweeting
          statuses containing certain keywords. When I first started tweeting at
          the #100DaysOfCode tag, lots of automated accounts would interact with
          my post. I marvelled at them, as building one myself felt like a
          million miles away. So I was excited to possibly provide that
          inspiration to others, and show it is not so far away as you might
          imagine.
          <br />
          <br />
          At first I ran this bot on PythonAnywhere, which is a great service
          for quickly and easily hosting an automated Python script.
          <br />
          After some time, though, I moved this into GitHub and used a YAML
          workflow to run regular updates. I also added in functionality to
          sanitise the posts that were amplified, in response to the high misuse
          of the platform&apos;s most popular tech keywords.
        </P>
        <Divider my={4} />
        <P>
          <Heading display="inline-block" as="h4" fontSize={20} mb={4} ml={0}>
            Update:
          </Heading>
          <br />
          As of 2023 I have disbaled the workflows and decomissioned the bot. So
          you will no longer see recent activity.
          <br />
          <br />
          After analysing the accounts activity, growth and interactions, I
          determined that the vast majority of connections were with other
          automated applications. Combined with limited follower growth I
          concluded that the account was not in fact providing value to users.
          <br />
          <br />I made the decision to disable the scripts so as not to waste
          server time, and more importantly, energy that could be better spent
          elsewhere. While it is a challenge to see my work invested into this
          no longer being used, it is important to always keep the user and
          value front and centre, and respond to changing conditions and
          requirements.
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
