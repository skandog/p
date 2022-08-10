import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { BakeGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import AugPizza from '../public/images/bakes/nduja_pizza_aug_22.jpg'
import AnchPizza from '../public/images/bakes/anchovy_july_22.jpg'
import Pita from '../public/images/bakes/pita_july_22.jpg'
import GrapeFruit from '../public/images/bakes/grapefruit_soda_july22.jpg'
// import FocaGanoush from '../public/images/bakes/focaccia_baba_ganoush_june_22'
import { motion } from 'framer-motion'

const Bakes = () => {
  return (
    <Layout>
      <Container>
        <Box
          // as={motion.div}
          borderRadius="lg"
          bg={useColorModeValue('purple.500', 'green.400')}
          color="whiteAlpha.800"
          p={3}
          mt={10}
          mb={6}
          align="center"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ rotate: 45 }}
          // cursor="pointer"
        >
          {/* I love to cook, bake and ferment exciting things! */}
        </Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Bakes
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <BakeGridItem
              id="pizza_aug_22"
              title="Nduja, Red Onion & Olive"
              alt="homecooked pizza"
              thumbnail={AugPizza.src}
            >
              Really enjoying the new found ability to build thickk crusts
            </BakeGridItem>
          </Section>
          <Section delay={0.1}>
            <BakeGridItem
              id="pizza_anchovy_july_22"
              title="Anchovy, Capers, Chili and Parsley"
              alt="homecooked pizza"
              thumbnail={AnchPizza.src}
            >
              I love anchovies, and anyone that will enjoy them with me.{' '}
            </BakeGridItem>
          </Section>
          <Section delay={0.2}>
            <BakeGridItem
              id="pita_july_22"
              title="Pita Bread"
              alt="homecooked pita"
              thumbnail={Pita.src}
            >
              First time making pita bread from scratch!
            </BakeGridItem>
          </Section>
          <Section delay={0.3}>
            <BakeGridItem
              id="grapefruit_soda"
              title="Fermented Grapefruit Soda"
              alt="fermented grapefruit soda"
              thumbnail={GrapeFruit.src}
            >
              Grapefruit juice, a simple
            </BakeGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Bakes
