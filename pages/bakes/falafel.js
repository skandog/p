import { Container, Badge, List, Link } from '@chakra-ui/react'
import { Title, BakeImage, Meta } from '../../components/bakes.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import Falafel1 from '../../public/images/bakes/jan_23/falafel_1.jpg'
import Falafel2 from '../../public/images/bakes/jan_23/falafel_2.jpg'

const Bake = () => {
  return (
    <Layout title="Falafel">
      <Container>
        <Title>
          Falafel and Pita <Badge ml={'10px'}>Jan 2023</Badge>
        </Title>
        <P>
          My mother&apos;s family originates from Lebanon and I spent some time
          living there, in Beirut, when I was 19. Recently hit with a massive
          craving for the delicious falafel wraps I used to eat almost daily, I
          decided to do it from scratch.
          <br />
          <br />
          First step was to improve my pita game; previous attempts have been
          fine for dipping in hummus, but not ideal for a proper sandwich. I
          landed on{' '}
          <Link
            href="https://www.loveandlemons.com/pita-bread-recipe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this recipe
          </Link>{' '}
          and the output was exactly what I was going for, soft and fluffy.
          <br /> <br />
          Then the key to the falafel was using dried chickpeas, rather than
          canned. Blending a bunch with garlic, spices and a load of herbs was
          straight forward. All that remained was to shape the patties and deep
          fry them. Best falafel I have had in years 😋 served with hummus,
          shreded cabbage and carrot.
        </P>
        <List.Root my={4} ml={4}>
          <List.Item>
            <Meta>Ingredients</Meta>
            <span>
              Chickpeas, Parsley, Cilantro, Garlic, Spices, Toasted Sesame Seeds{' '}
            </span>
          </List.Item>
        </List.Root>
        <BakeImage src={Falafel1.src} alt="Baja Fish Tacos" />
        <BakeImage src={Falafel2.src} alt="Homemade Flour Tortillas" />
      </Container>
    </Layout>
  )
}

export default Bake
