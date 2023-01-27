import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    Divider
  } from '@chakra-ui/react'
  import NextLink from 'next/link'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, ProjectImage, Meta } from '../../components/project.js'
  import P from '../../components/paragraph.js'
  import Layout from '../../components/layouts/article.js'
  import skanfolioLight from '../../public/images/projects/skanfolio_light.png'
  import skanfolioDark from '../../public/images/projects/skanfolio_dark.png'
  
  const Project = () => {
    return (
      <Layout title="Skanfolio">
        <Container>
          <Title>
            PomFocus - Productivity App <Badge ml={'10px'}>2023</Badge>
          </Title>
          <P>
            I started this project to practice building beautiful websites. I also
            wanted to learn as part of the process, so decided to use Next.js for
            the first time. With rising popularity, Next.js is a framework for
            building server-rendered React applications, which means that the
            initial HTML for the page is generated on the server, rather than in
            the browser. This can improve the performance and SEO of the website.
            <br /> <br />I started with a tutorial by
            <NextLink href="https://twitter.com/craftzdog" passHref>
              <Link target={'_blank'}> Takuya Matsuyama</Link>
            </NextLink>
            , whose eye for design is incredible. I highly recommend his content.
            The style of his videos is extremely challenging to follow, however,
            as there is no narrative provided; just a view of his screen as he
            works in Vim! As a result, I was forced to go away and research nearly
            every keystroke. While this process was extremely frustrating at
            times, ultimately it was immensely valuable as I came out of the end
            properly understanding the tools I was using, and confident in my
            ability to use the full tech stack involved in the project going
            forwards.
            <br />
            <br />
            I spent a long time after experimenting to further understand the
            possibilities presented by these tools, and truly make the site my
            own. And I continue to update the site regularly with new content and
            functionality. <br />
            <br />
          </P>
          <List ml={4} my={2}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://p-skandog.vercel.app/" target={'_blank'}>
                Homepage <ExternalLinkIcon mx={'2px'} />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Source Code</Meta>
              <Link href="https://github.com/skandog/p" target={'_blank'}>
                Github <ExternalLinkIcon mx={'2px'} />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>
                Javascript, React.js, Next.js, Chakra-UI, Framer-Motion, Emotion
              </span>
            </ListItem>
          </List>
          <Divider my={8} />
  
          <ProjectImage
            src={useColorModeValue(skanfolioDark.src, skanfolioLight.src)}
            alt="Portfolio Front Page"
          />
        </Container>
      </Layout>
    )
  }
  
  export default Project
  