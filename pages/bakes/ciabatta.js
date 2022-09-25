import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Ciabatta1 from '../../public/images/bakes/ciabatta_sarnie.jpg'
import Ciabatta2 from '../../public/images/bakes/ciabatta_loaf.jpg'
import Ciabatta3 from '../../public/images/bakes/ciabatta_rolls_before.jpg'
import Ciabatta4 from '../../public/images/bakes/ciabatta_rolls_after.jpg'

const Bake = () => {
  return (
    <Layout title="Pita Bread">
      <Container>
        <Title>
          Homemade Ciabatta <Badge ml={'10px'}>Sept 2022</Badge>
        </Title>
        <P>
          Curious as ever I wanted to try something new. Ciabatta is always such
          a treat, so I decided to give it a go. I was pleasantly surprised to
          discover how straight forward it was. Work together a fairly wet dough
          with and leave to rise for a couple hours. Then a couple spritz with
          water before it goes into the oven for 15-20 minutes!
          <br /> <br />
          First round I made a couple small loafs, which were great for
          sandwiches. Pictured below is one made of flame roasted peppers,
          homemade baba ganoush, chilis, olives and arugula. A new rugular I
          think.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Strong White Flour, Yeast, Sugar, Salt, Water</span>
          </ListItem>
        </List>
        <BakeImage src={Ciabatta1.src} alt="Homemade Ciabatta Sandwich" />

        <BakeImage src={Ciabatta2.src} alt="Homemade Ciabatta Loaf" />
        <BakeImage
          src={Ciabatta3.src}
          alt="Homemade Ciabatta Rolls Before Bake"
        />
        <BakeImage
          src={Ciabatta4.src}
          alt="Homemade Ciabatta Rolls After Bake"
        />
      </Container>
    </Layout>
  )
}

export default Bake
