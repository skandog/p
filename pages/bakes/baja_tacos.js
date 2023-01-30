import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Baja1 from '../../public/images/bakes/jan_23/baja_tacos_1.jpg'
import Baja2 from '../../public/images/bakes/jan_23/baja_tacos_2.jpg'

const Bake = () => {
  return (
    <Layout title="Baja Tacos">
      <Container>
        <Title>
          Baja Fish Tacos <Badge ml={'10px'}>Jan 2023</Badge>
        </Title>
        <P>
          I love tacos (who doesn&apos;t) but it can be hard to find decent
          Mexican food in the UK. This is especially true of the delicate Baja
          Fish Taco, which is often undermined by overly flavourful
          accompaniment.
          <br /> <br />I make my own flour tortillas, following a simple and
          reliable recipe from{' '}
          <NextLink
            href="https://www.bbcgoodfood.com/recipes/tortillas"
            passHref
          >
            <Link target="_blank">BBC Good Food</Link>
          </NextLink>
          .
          <br /> <br />
          <NextLink
            href="https://www.foodrepublic.com/recipes/easy-beer-batter-recipe/"
            passHref
          >
            <Link target="_blank">Beer batter</Link>
          </NextLink>{' '}
          the haddock and deep fry in a wok. Then serve with shredded cabbage,
          avocado, a light chili creme and a little cilantro.
          <br /> <br />
          Perfection.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>
              Haddock, Plain Flour, Beer, Green Cabbage, Avocado, Cilantro{' '}
            </span>
          </ListItem>
        </List>
        <BakeImage src={Baja2.src} alt="Baja Fish Tacos" />
        <BakeImage src={Baja1.src} alt="Homemade Flour Tortillas" />
      </Container>
    </Layout>
  )
}

export default Bake
