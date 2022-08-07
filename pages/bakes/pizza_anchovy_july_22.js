import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import AnchPizza from '../../public/images/bakes/anchovy_july_22.jpg'

const Bake = () => {
  return (
    <Layout title="Anchovy Pizza">
      <Container>
        <Title>Anchovy, Capers, Chili & Parsley - July 2022</Title>
        <P>
          I love strong flavours and few ingredients can compete with the
          intense saltiness of anchovies. For my anchovy pizza I marinate the
          fish with olive oil, lemon juice + zest, capers, chili and fresh
          parsley. This goes a long way to distributing the strong flavour
          across the pizaa, where often the flavour is limited only to where the
          fish lays.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>
              Anchovy, Capers, Red Chili, Fresh Parsley, Lemon Juice + Zest
            </span>
          </ListItem>
        </List>
        <BakeImage
          src={AnchPizza.src}
          alt="Nduja, onion and olive pizza"
        ></BakeImage>
      </Container>
    </Layout>
  )
}

export default Bake
