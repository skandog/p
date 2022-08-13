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
import backpack from '../../public/images/projects/backpack.jpg'

const Project = () => {
  return (
    <Layout title="Skanfolio">
      <Container>
        <Title>
          Backpack - A study aid for bootcampers <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          This was a project that we undertook 
          <br />
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Web App</Meta>
            <Link
              href="https://github.com/SchoolOfCode/w9_frontend-project-team-js"
              target={'_blank'}
            >
              Repo <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Javascript, React.js, Node.js, Jest, Supertest, React Testing
              Library
            </span>
          </ListItem>
        </List>

        <ProjectImage src={backpack.src} alt="Backpack Skills Tracker" />
      </Container>
    </Layout>
  )
}

export default Project
