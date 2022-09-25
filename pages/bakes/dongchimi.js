import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Dongchimi1 from '../../public/images/bakes/dongchimi_1.jpg'
import Dongchimi2 from '../../public/images/bakes/dongchimi_2.jpg'
import Dongchimi3 from '../../public/images/bakes/dongchimi_3.jpg'
import Dongchimi4 from '../../public/images/bakes/dongchimi_4.jpg'
import Dongchimi5 from '../../public/images/bakes/dongchimi_5.jpg'

const Bake = () => {
  return (
    <Layout title="Pita Bread">
      <Container>
        <Title>
          Korean Dongchimi (Radish Water Kimchi)
          <Badge ml={'10px'}>May 2022</Badge>
        </Title>
        <P>
          As a huge fan of spicy I adore Korean food, but I was surprised to
          discover it is not all red hot. Korean cuisine in fact strives for
          balance and I learned for every chili saturated dish there is usually
          an equally gratifying and subtle counterpart.
          <br />
          <br />
          This radish water kimchi is crisp and refreshing without any heat. The
          ingredients below are chopped, compiled and covered in filtered water.
          Over a few days the water turns acidic and pickles the contents. A
          fantastic side dish with most any Korean meal.
          <br />
          <br />
          Recipe taken from one of my favourite recipe books:{' '}
          <NextLink
            href="https://www.waterstones.com/book/our-korean-kitchen/jordan-bourke/rejina-pyo/9780297609711"
            passHref
          >
            <Link target="_blank">Our Korean Kitchen</Link>
          </NextLink>
          .
        </P>
        <List my={4} ml={4}>
          <ListItem>
            <Meta>Ingredients</Meta>
            <span>Daikon, Garlic, Ginger, Chili, White Onion, Scallion</span>
          </ListItem>
        </List>
        <BakeImage src={Dongchimi5.src} alt="Homemade Dongchimi" />
        <BakeImage src={Dongchimi1.src} alt="Homemade Dongchimi" />
        <BakeImage src={Dongchimi2.src} alt="Homemade Dongchimi" />
        <BakeImage src={Dongchimi3.src} alt="Homemade Dongchimi" />
        <BakeImage src={Dongchimi4.src} alt="Homemade Dongchimi" />
      </Container>
    </Layout>
  )
}

export default Bake
