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
import ff from '../../public/images/projects/ff.png'
import ff3 from '../../public/images/projects/ff3.png'
import ff2 from '../../public/images/projects/ff2.png'

const Project = () => {
  return (
    <Layout title="Skanfolio">
      <Container>
        <Title>
          Backpack - A study aid for bootcampers <Badge ml={'10px'}>2022</Badge>
        </Title>
        <P>
          For this project I had the pleasure of working with{' '}
          <NextLink href="https://github.com/millagmc" passHref>
            <Link target="_blank">Camilla</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://github.com/ClaudiaGC1339" passHref>
            <Link target="_blank">Claudia</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://github.com/jimlikesjazz" passHref>
            <Link target="_blank">Jim</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://github.com/J05hL" passHref>
            <Link target="_blank">Joshua</Link>
          </NextLink>{' '}
          and{' '}
          <NextLink href="https://github.com/simran-toor" passHref>
            <Link target="_blank">Sim</Link>
          </NextLink>{' '}
          to build a full stack application in four weeks. We again had not
          worked together as a team before, although I was lucky to have worked
          previously on an individual basis with most involved. We were given
          the open brief &apos;to solve a problem for someone&apos;.
          <br />
          <br />
          Bringing the experience of our 1-week project, we again introduced
          ourselves, and agreed on our team manifesto. It quickly became
          apparent that we had a good blend of specialism, and I was excited to
          learn some design magic from Sim, Jim and Camilla! For this reason we
          opted not to use a component library, so that we could learn how to
          build assets from scratch.
          <br />
          <br />
          We discussed ideas and it became clear that we all wanted to work on
          something to help a wider audience. At the time there was an explosion
          in foodbank usage and needs as cost of living spiralled. Research
          showed that Many smaller community food banks do not have access to
          the same tools and resources that larger ones do, and thus use
          workarounds to communicate with their community.
          <br />
          <br />
          We set out to enable smaller organisations to better interact with
          their community, as well as provide a central location for
          beneficiaries and supporters to access information about their local
          services.
          <br />
          <br />
          The latest verison connects via our hosted backend to a wider API of
          larger foodbanks around the UK, as well as a database of foodbanks
          registered directly with the app. So smaller foodbanks can sign up
          easily, and use a headless cms to update the details about their
          foodbank. Supporters looking to help are also able to find infomation
          about items most needed and ways to donate.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Web App</Meta>
            <Link
              href="https://your-local-foodbank.netlify.app/givehelp"
              target={'_blank'}
            >
              Website <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Javascript, React.js, Node.js, Framer-Motion, Emotion, Jest,
              Supertest, React Testing Library
            </span>
          </ListItem>
        </List>
        <Divider my={8} />

        <ProjectImage src={ff.src} alt="Foodbank Finder Landing Page" />
        <ProjectImage src={ff2.src} alt="Foodbank Finder Give Help" />
        <ProjectImage src={ff3.src} alt="Foodbank Finder Contact" />
      </Container>
    </Layout>
  )
}

export default Project
