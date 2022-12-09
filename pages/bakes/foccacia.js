import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Foccacia1 from '../../public/images/bakes/focaccia_for_max22.jpg'
import Foccacia2 from '../../public/images/bakes/focaccia_baba_ganoush_june_22.jpg'

const Bake = () => {
  return (
    <Layout title="Foccacia">
      <Container>
        <Title>
          Italian Foccacia Bread
          <Badge ml={'10px'}>August 2022</Badge>
        </Title>
        <P>
          Adventurous as always, I wanted to expand my baking arsenal. Tried
          foccacia for the first time, nervous that it would be difficult.
          Mercifully it appears my years of making pizza have prepared me well!
          Essentially a dough similar to pizza, but with more olive oil in the
          mix. Pressed into a cast iron skillet, ingredients forced into the top
          with a bit more oil and voila!
          <br />
          <br />A really straight forward one and a new favourite gift to bring
          when visiting friends 😋.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Shallots, Red Onion, Kalmata Olives, Rosemary</span>
          </ListItem>
        </List>
        <BakeImage src={Foccacia1.src} alt="Homemade Foccacia Bread" />
        <BakeImage src={Foccacia2.src} alt="Homemade Foccacia Bread" />
      </Container>
    </Layout>
  )
}

export default Bake
