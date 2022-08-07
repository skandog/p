import { Container, List, ListItem, Badge } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import GrapeSoda from '../../public/images/bakes/grapefruit_soda_july22.jpg'

const Bake = () => {
  return (
    <Layout title="Grapefruit Soda">
      <Container>
        <Title>
          Fermented Grapefruit Soda <Badge>July 2022</Badge>
        </Title>
        <P>
          I have been fermenting ginger beer using a natural yeast culture for
          the last couple years. Recently, sad at the lack of commercial
          availability, I decided to brew some grapefruit soda. This was a bit
          of an experiement, as there was not much guidance online.
          <br />
          Knowing that the citrus could make the product bitter I added more
          sugar than usual, which turned out to be a good bet. I boiled down a
          simple syrup with the sugar, water and zests of the grapefruit and
          lemon. This, combined with the grapefruit juice and the yeast culture,
          left for a couple days in a kilner bottle.
          <br />
          The final product was so good, better than any grapefruit soda I have
          managed to source in the UK.
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Grapefruit, Lemon, Sugar, Ginger Yeast Culture</span>
          </ListItem>
        </List>
        <BakeImage src={GrapeSoda.src} alt="Homemade Pita Bread"></BakeImage>
      </Container>
    </Layout>
  )
}

export default Bake
