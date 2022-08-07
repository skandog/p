import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Pita from '../../public/images/bakes/pita_july_22.jpg'

const Bake = () => {
  return (
    <Layout title="Pita Bread">
      <Container>
        <Title>Homemade Pita Bread - July 2022</Title>
        <P>
          I made a load of baba ganoush for some friends coming round for
          drinks. But when I looked in the freezer I realised my error: no pita!
          Not one to be beaten by a problem, I had a go at making my own and was
          delighted to discover they're pretty straight forward. A fairly dry
          and rough wholemeal dough, rolled out thin and given 10 mins in the
          oven. never buying pita again!
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Wholemeal Flour, Yeast, Sugar, Salt, Water</span>
          </ListItem>
        </List>
        <BakeImage src={Pita.src} alt="Homemade Pita Bread"></BakeImage>
      </Container>
    </Layout>
  )
}

export default Bake
