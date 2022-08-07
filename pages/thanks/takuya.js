import NextLink from 'next/link'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, ThanksImage, Meta } from '../../components/thanks.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import TakuyaDog from '../../public/images/thanks/takuya_dog.jpg'

const Thank = () => {
  return (
    <Layout title={'Craftzdog'}>
      <Container>
        <Title>Takuya Matsuyama (Craftzdog)</Title>
        <P>
          I came across Mr Matsuyama's{' '}
          <NextLink href="https://youtu.be/bSMZgXzC9AA" passHref>
            <Link target="_blank">tutorial</Link>
          </NextLink>{' '}
          online, while looking for guidance on how to build a portfolio page
          using Next.js and Chakra UI. Looking at his work I was dazzled by his
          approach to design and was excited to learn from him, not to mention
          the style of his videos are extremely soothing and aesthetically
          pleasing.
          <br />
          However only a few minutes into the tutorial, I realised there was no
          narritive to the design process. I had no context to Mr Matsuyama's
          decisions. While nervous to continue, I decided to perservere.
          <br />
          And I am so happy that I did. It was necessary for me to go away an
          research almost every keystroke and as a result I have learned so much
          from this experience. More than any other coding tutorial. This
          process of research and reading docs while seeing what the end goal
          should look like, really helped to embed a huge amount of knowledge.
          <br />I have levelled up in my ability to build using{' '}
          <NextLink href="https://nextjs.org/" passHref>
            <Link target="_blank">Next.js</Link>
          </NextLink>{' '}
          and{' '}
          <NextLink href="https://chakra-ui.com/" passHref target="_blank">
            <Link target="_blank">Chakra</Link>
          </NextLink>
          , as well as{' '}
          <NextLink href="https://emotion.sh/" passHref target="_blank">
            <Link target="_blank">Emotion styled components</Link>
          </NextLink>
          ,{' '}
          <NextLink
            href="https://www.framer.com/motion/"
            passHref
            target="_blank"
          >
            <Link target="_blank">Framer Motion</Link>
          </NextLink>{' '}
          and even{' '}
          <NextLink href="https://eslint.org/" passHref target="_blank">
            <Link target="_blank">ES Lint</Link>
          </NextLink>
          .
          <br />
          <br />
          Thank you mr Matsuyama!
        </P>
        <br />
        <ThanksImage src={TakuyaDog.src} alt="Takuya Matsuyama - craftzdog" />
      </Container>
    </Layout>
  )
}

export default Thank
