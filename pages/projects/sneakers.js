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
import sneakers1 from '../../public/images/projects/sneakers1.JPG'
import sneakers2 from '../../public/images/projects/sneakers2.JPG'
import sneakers3 from '../../public/images/projects/sneakers3.JPG'

const Poject = () => {
  return (
    <Layout title=".Sneakers">
      <Container>
        <Title>
          .Sneakers - Ecommerce Template <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          I built this single-page e-commerce store as an exercise to practice
          my front-end fundamentals. For this site I used only HTML, SCSS and
          vanilla JavaScript, manipulating the DOM for all animations. This was
          done with guidance from
          <NextLink href={'https://twitter.com/lamawebdev'} passHref>
            <Link target={'_blank'}> Lama Dev</Link>
          </NextLink>
          . <br /> <br />
          For the past few months I have been exclusively using frameworks like
          React and Django to build, and the time-constrained weather app
          challenge helped me to see that I could benefit from some practice
          using the basics. Not least because these stripped back sites are
          often far more performant, a huge factor for good UX.
          <br /> <br />I was surprised at how much I enjoyed building in this
          way, with less of the complexity abstracted away. When first learning
          how to use query selectors to interact with the DOM I remember finding
          it confusing, but going through this project it now feels more pure 😅
          It has certainly resolidified my underlying web dev knowledge.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://skandog.github.io/lama_comm/" target={'_blank'}>
              Homepage <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/skandog/lama_comm" target={'_blank'}>
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SCSS, Javascript</span>
          </ListItem>
        </List>
        <Divider my={8} />
        <ProjectImage src={sneakers1.src} alt=".Sneakers E-commerce Site" />
        <ProjectImage src={sneakers2.src} alt=".Sneakers E-commerce Site" />
        <ProjectImage src={sneakers3.src} alt=".Sneakers E-commerce Site" />
      </Container>
    </Layout>
  )
}

export default Poject
