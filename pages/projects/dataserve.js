import { Container, Badge, Link, List, Separator } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { useColorModeValue } from '../../components/providers'

import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import dataServe_logo from '../../public/images/projects/dataServe_logo.png'
import dataServe_logo_light from '../../public/images/projects/dataServe_logo_light.png'

const Project = () => {
  return (
    <Layout title="dataServe">
      <Container>
        <Title>
          dataServe <Badge ml={'10px'}>2023 - Present</Badge>
        </Title>
        <P>
          <Link
            href="https://www.aimdataserve.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dataserve
          </Link>{' '}
          from{' '}
          <Link
            href="https://www.aimltd.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aim Ltd
          </Link>
          , is a single, modern and easy to use website for self-service needs
          across all teams and systems. A midpoint for an organisations numerous
          disparate applications, using the latest AI technology it gets users
          to their solution quickly and accurately.
          <br />
          <br />
          This is a fantastic application to be a part of, always looking at the
          cutting edge of tech, including machine learning, neural networks and
          leveraging large language models such as ChatGPT.
          <br />
          <br />I have been heavily involved with dataServe since 2023, and
          particulalry enjoyed overhauling and adding new features to the page
          builder component, as well as taking a lead role on the reporting
          functions within the app.
        </P>
        <List.Root ml={4} my={2}>
          <List.Item>
            <Meta>Website</Meta>
            <Link
              href="https://www.aimdataserve.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dataServe <FiExternalLink aria-hidden="true" />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>
              TypeScript, Javascript, React.js, Node.js, Sails.js, MongoDB,
              ChatGPT, Redux, Mui, Chart.js, Elastic, Redis, Docker, WSL
            </span>
          </List.Item>
        </List.Root>
        <Separator my={8} />

        <ProjectImage
          src={useColorModeValue(dataServe_logo_light.src, dataServe_logo.src)}
          alt="dataServe"
        />
      </Container>
    </Layout>
  )
}

export default Project
