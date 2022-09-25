import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Figgy from '../../public/images/bakes/fig_goats_onion_sept_22.jpg'

const Bake = () => {
  return (
    <Layout title="Pita Bread">
      <Container>
        <Title>
          Fig, Goats Cheese, Caramelised Onion Pizza{' '}
          <Badge ml={'10px'}>Sept 2022</Badge>
        </Title>
        <P>
          I usually go for big and bold flavours, so felt it was time to have a
          go at something more delicate. The idea materialised while shopping I
          saw the last-of the-season figs being sold for cheap. I cooked the red
          onions in a dry pan over a medium heat, before deglazing with balsamic
          vinegar. The result was phenomenal.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>
              Fig, Goats Cheese, Caramelised Red Onions, Balsamic Vinegar
            </span>
          </ListItem>
        </List>
        <BakeImage
          src={Figgy.src}
          alt="Fig, Goats Cheese, Caramelised Onion Pizza"
        />
      </Container>
    </Layout>
  )
}

export default Bake
