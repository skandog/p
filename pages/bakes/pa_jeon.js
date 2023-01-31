import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import PaJeon1 from '../../public/images/bakes/jan_23/pa_jeon_1.jpg'
import PaJeon2 from '../../public/images/bakes/jan_23/pa_jeon_2.jpg'

const Bake = () => {
  return (
    <Layout title="Pa Jeon">
      <Container>
        <Title>
          Pa Jeon (Korean Pancake) <Badge ml={'10px'}>Jan 2023</Badge>
        </Title>
        <P>
          My favourite lunch to make if I have more than 15 mins is this
          wonderful Korean pancake called Pa Jeon. I first discovered it in one
          of my favourite and most regularly used cookbooks,{' '}
          <NextLink
            href="https://www.weidenfeldandnicolson.co.uk/titles/jordan-bourke/our-korean-kitchen/9780297609711/"
            passHref
          >
            <Link target="_blank">
              OUR KOREAN KITCHEN by Rejina Pyo &amp; Jordan Bourke
            </Link>
          </NextLink>
          , which I highly recommend if you enjoy Korean food.
          <br /> <br />
          My go to is adapted from their recipe for a seafood version, just
          switch out the prawns and squid for cabbage and carrot.
          <br /> <br />
          Pour half of the batter into a hot pan and lay the vegtables on top.
          Let it cook for a couple minutes before adding the remaining batter,
          then cook both sides until crispy.
          <br /> <br />
          Delicious served with a dipping sauce made with garlic, soy sauce,
          black vinegar and toasted sesame oil. And if you have any kimchi to
          hand, make sure to serve on the side; pictured below is some of the{' '}
          <NextLink href="/bakes/dongchimi" passHref>
            <Link target="_blank">water radish kimchi</Link>
          </NextLink>{' '}
          I make on the regs.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>
              Eggs, Plain Flour, Rice Flour, Spring Onions, Green Cabbage,
              Carrot, Chili, Garlic, Soy Sauce, Black Vinegar and Toasted Sesame
              Oil
            </span>
          </ListItem>
        </List>
        <BakeImage
          src={PaJeon1.src}
          alt="Pa Jeon (Korean Pancake) in the pan"
        />
        <BakeImage
          src={PaJeon2.src}
          alt="Pa Jeon (Korean Pancake) served with water radish kimchi"
        />
      </Container>
    </Layout>
  )
}

export default Bake
