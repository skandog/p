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
import mitroLight from '../../public/images/projects/mitro_light1.JPG'
import mitroDark from '../../public/images/projects/mitro_dark1.JPG'

const Project = () => {
  return (
    <Layout title="Mitro Fanclub Bot">
      <Container>
        <Title>
          Mitro Fanclub Bot <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          As a full-stack developer with a particular love for the back end, I
          have always been intrigued by PHP. It always looked so ugly and hard
          to comprehend, yet it is the underlying tool for enormous institutions
          like WordPress and Wikipedia. Even if it is old, and a little obtuse
          looking, there must be something about it right?
          <br />
          <br />
          A particular challenge I encountered with this project was the
          inavailability of good resources to help learn the language. So I
          started to study the fundamentals using the documentation. When I was
          comfortable with the structure and syntax, I wanted to put it into
          practice with a project.
          <br />
          <br />
          For a while, I had been thinking about an idea for a new Twitter bot
          designed to support and promote one of my favourite footballers, and
          this appeared to be an appropriate challenge to test out my new PHP
          skills.
          <br />
          <br />
          It was definitely a good stretch of my skills, and I learned a lot
          more about the language than just studying could reveal. Some of my
          key lessons were around the use of Composer to access public modules;
          reading and writing to other files from within a script; and handling
          of environment variables.
          <br />
          <br />I also chose this time to use GitHub Actions to automate the
          bot&apos;s behavior, and as part of the process became a lot more
          comfortable with writing YAML workflows, using them to trigger on push
          and on a regular schedule.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://twitter.com/FanclubMitro" target={'_blank'}>
              Homepage <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/skandog/FanclubMitro"
              target={'_blank'}
            >
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, GitHub Actions</span>
          </ListItem>
        </List>
        <Divider my={8} />
        <ProjectImage
          src={useColorModeValue(mitroDark.src, mitroLight.src)}
          alt="Portfolio Front Page"
        />
      </Container>
    </Layout>
  )
}

export default Project
