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
// import sneakers1 from '../../public/images/projects/sneakers1.JPG'

const Project = () => {
  return (
    <Layout title="Mitro Fanclub Bot">
      <Container>
        <Title>
          Mitro Fanclub Bot <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>I FUCKING LOVE MITRO MAN</P>
      </Container>
    </Layout>
  )
}

export default Project
