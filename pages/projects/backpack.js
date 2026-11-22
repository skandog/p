import { Container, Badge, Link, List, Separator } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import backpack from '../../public/images/projects/backpack.jpg'

const Project = () => {
  return (
    <Layout title="Backpack">
      <Container>
        <Title>
          Backpack - A study aid for bootcampers <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          This was a project in which I worked with{' '}
          <Link
            href="https://github.com/AdamPhasey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adam
          </Link>
          ,{' '}
          <Link
            href="https://github.com/ClaudiaGC1339"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claudia
          </Link>{' '}
          and{' '}
          <Link
            href="https://github.com/StevenCK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven
          </Link>{' '}
          to build a full stack app in just one week. We had not worked together
          before that week, and were given the simple breif to &apos;build an
          app to help fellow students&apos;.
          <br />
          <br />
          We started by getting to know eachother, sharing our strengths and
          weaknesses. We agreed how we wanted to work as a team before we even
          started tackling the problem.
          <br />
          <br />
          We worked well through the week. And while the enormity of the task
          didnt dawn on us until we were halfway through, we were pleased with
          reaching our mvp v.1.0.
          <br />
          <br />
          The general premise of the app is to help students to keep track of
          their development, by breaking down the topics into individual skills,
          as well as tools to assist in improving those skills.
        </P>
        <List.Root ml={4} my={2}>
          <List.Item>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/SchoolOfCode/w9_frontend-project-team-js"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Github <FiExternalLink aria-hidden="true" />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>
              Javascript, React.js, Node.js, Jest, Supertest, React Testing
              Library
            </span>
          </List.Item>
        </List.Root>
        <Separator my={8} />

        <ProjectImage src={backpack.src} alt="Backpack Skills Tracker" />
      </Container>
    </Layout>
  )
}

export default Project
