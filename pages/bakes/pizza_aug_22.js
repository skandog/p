import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import AugPizza from '../../public/images/bakes/nduja_pizza_aug_22.jpg'

const Bake = () => {
  return (
    <Layout title="Nduja, Kalmata & Red Onion - August 2022">
      <Container>
        <Title>
          Nduja, Kalmata & Red Onion <Badge ml={'10px'}>August 2022</Badge>
        </Title>
        <P>
          My signature pizza. Nduja, pork sausage cured with Calabrian chili
          pepper, is great on pizza. It has a strong spiciness which difuses
          across the mouth. The red onion offers some much needed texture and
          sharpness, which is balanced by the creaminess of the kalmata brown
          olives.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Nduja Sausage, Red Onion, Kalamata Olives</span>
          </ListItem>
        </List>
        <BakeImage
          src={AugPizza.src}
          alt="Nduja, onion and olive pizza"
        ></BakeImage>
      </Container>
    </Layout>
  )
}

export default Bake
