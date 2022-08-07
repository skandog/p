import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import AugPizza from '../public/images/bakes/nduja_pizza_aug_22.jpg'
import AnchPizza from '../public/images/bakes/anchovy_july_22.jpg'
import Pita from '../public/images/bakes/pitta_july_22.jpg'
import GrapeFruit from '../public/images/bakes/grapefruit_soda_july22.jpg'

const Bakes = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg="yellow.700"
          color="whiteAlpha.800"
          p={3}
          mt={10}
          mb={6}
          align="center"
        >
          I love to cook, bake and ferment exciting things!
        </Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Bakes
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="pizza"
              title="Aug 2022 - Nduja + Red Onion"
              alt="homecooked pizza"
              thumbnail={AugPizza.src}
            >
              Really enjoying the new found ability to build thickk crusts
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="pizza"
              title="July 2022 - Anchovy, Capers, Chili and Parsley"
              alt="homecooked pizza"
              thumbnail={AnchPizza.src}
            >
              I love anchovies, and anyone that will enjoy them with me.{' '}
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="pita"
              title="July 2022 - Homemade Pita Bread"
              alt="homecooked pita"
              thumbnail={Pita.src}
            >
              I made a bunch of baba ganoush, looked in the freezer and
              disaster: no pita! So I had a go at making my own and pleased to
              discover they're pretty straight forward.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="grapefruit_soda"
              title="July 2022 - Fermented Grapefruit Soda"
              alt="fermented grapefruit soda"
              thumbnail={GrapeFruit.src}
            >
              I have been fermenting ginger beer using a natural yeast culture
              for the last couple years. I recently, sad at the lack of
              commercial availability, decided to brew some grapefruit soda.
              Delicious.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Bakes
