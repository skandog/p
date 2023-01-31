import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Kombucha1 from '../../public/images/bakes/jan_23/kombucha_1.jpg'
import Kombucha4 from '../../public/images/bakes/jan_23/kombucha_4.jpg'
// import Kombucha2 from '../../public/images/bakes/jan_23/kombucha_2.jpg'
// import Kombucha3 from '../../public/images/bakes/jan_23/kombucha_3.jpg'

const Bake = () => {
  return (
    <Layout title="Kombucha">
      <Container>
        <Title>
          Kombucha <Badge ml={'10px'}>Jan 2023</Badge>
        </Title>
        <P>
          My first go at making kombucha from scratch was a fun adventure! Tired
          of paying eye-watering amounts in the shop, and having brewed ginger
          beer for years, I felt it was about time.
          <br />
          <br />
          I was amazed by the transformation of sweet tea into a tangy,
          effervescent drink. The process was simple yet fascinating, and I was
          eager to see the result. The anticipation built as I patiently waited
          for my kombucha to ferment. The final product was delicious and I
          can&apos;t wait to experiment with different flavors and ingredients.
          <br />
          <br />
          Big shoutout to{' '}
          <NextLink href="https://www.reddit.com/r/Kombucha/" passHref>
            <Link target="_blank">r/Kombucha</Link>
          </NextLink>{' '}
          for their detailed guides and supportive community.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>
              Black Tea, Kombucha SCOBY, Sugar, (Flavours: Pinapple, Raspberry){' '}
            </span>
          </ListItem>
        </List>
        <BakeImage src={Kombucha4.src} alt="Bottled Kombucha" />
        <BakeImage src={Kombucha1.src} alt="Kombucha Fermenting" />
      </Container>
    </Layout>
  )
}

export default Bake
