import { Container, Link } from '@chakra-ui/react'
import { Title, ThanksImage } from '../../components/thanks.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import TakuyaDog from '../../public/images/thanks/takuya_dog.jpg'

const Thank = () => {
  return (
    <Layout title={'Craftzdog'}>
      <Container>
        <Title>Takuya Matsuyama (Craftzdog)</Title>
        <P>
          I came across Mr Matsuyama&apos;s{' '}
          <Link
            href="https://youtu.be/bSMZgXzC9AA"
            target="_blank"
            rel="noopener noreferrer"
          >
            tutorial
          </Link>{' '}
          online, while looking for guidance on how to build a portfolio page
          using Next.js and Chakra UI. Looking at his work I was dazzled by his
          approach to design and was excited to learn from him, not to mention
          the style of his videos are extremely soothing and aesthetically
          pleasing.
          <br />
          However only a few minutes into the tutorial, I realised there was no
          narritive to the design process. I had no context to Mr
          Matsuyama&apos;s decisions. While nervous to continue, I decided to
          perservere.
          <br />
          And I am so happy that I did. It was necessary for me to go away an
          research almost every keystroke and as a result I have learned so much
          from this experience. More than any other coding tutorial. This
          process of research and reading docs while seeing what the end goal
          should look like, really helped to embed a huge amount of knowledge.
          <br />I have levelled up in my ability to build using{' '}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>{' '}
          and{' '}
          <Link
            href="https://chakra-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chakra
          </Link>
          , as well as{' '}
          <Link
            href="https://emotion.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emotion styled components
          </Link>
          ,{' '}
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer Motion
          </Link>{' '}
          and even{' '}
          <Link
            href="https://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ES Lint
          </Link>
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
