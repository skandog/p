import { Container, Badge, Link, List, Separator } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

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
          <Link
            href="https://twitter.com/lamawebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lama Dev
          </Link>
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
        <List.Root ml={4} my={2}>
          <List.Item>
            <Meta>Website</Meta>
            <Link
              href="https://skandog.github.io/lama_comm/"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Homepage <FiExternalLink aria-hidden="true" />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/skandog/lama_comm"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Github <FiExternalLink aria-hidden="true" />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>HTML, SCSS, Javascript</span>
          </List.Item>
        </List.Root>
        <Separator my={8} />
        <ProjectImage src={sneakers1.src} alt=".Sneakers E-commerce Site" />
        <ProjectImage src={sneakers2.src} alt=".Sneakers E-commerce Site" />
        <ProjectImage src={sneakers3.src} alt=".Sneakers E-commerce Site" />
      </Container>
    </Layout>
  )
}

export default Poject
