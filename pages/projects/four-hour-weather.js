import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph.js'
import weather from '../../public/images/projects/four-hour-weather-app.png'

const Project = () => {
  return (
    <Layout title={'Weather Forecast'}>
      <Container>
        <Title>
          Five Day Weather Forecast
          <Badge ml={'15px'}>2022</Badge>
        </Title>
        <P>
          This project was a front-end exercise that a friend set me. The
          primary challenge was to deliver in a short amount of time, just four
          hours. The secondary challenge was to build the application using
          SCSS/SASS while not relying on in-built grid systems such as
          bootstrap.
          <br />
          <br />I enjoyed this build as it stretched me further than I expected;
          I have found positioning using only CSS challenging since I started
          coding, and the time pressure really helped to motivate me and develop
          a better grasp of the fundamentals.
          <br />
          <br />
          Given that time was the primary challenge, I had to stop even though I
          did not feel that the project was complete. While I had hit all of the
          targets set, I would have loved to add a lot more attractive design.
          <br />
          <br />I deliberated whether to share this, as it is not at the level
          that I would be happy shipping for a client, but ultimately decided it
          is worth showing my development. I regularly appraise my skill set for
          areas that could benefit from more learning and work on those to
          ensure I remain a well rounded full-stack developer.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Webpage</Meta>
            <Link
              href="https://weather-app-skandog.vercel.app/"
              target={'_blank'}
            >
              Webpage <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/skandog/weather_app"
              target={'_blank'}
            >
              Github <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, Next.js, React, SCSS, OpenWeatherAPI</span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage src={weather.src} alt="Five Day Weather Forecast" />
      </Container>
    </Layout>
  )
}

export default Project
