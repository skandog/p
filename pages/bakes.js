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
import Ciabatta from '../public/images/bakes/ciabatta_sarnie.jpg'
import Dongchimi from '../public/images/bakes/dongchimi_4.jpg'
import Figgy from '../public/images/bakes/fig_goats_onion_sept_22.jpg'
import Foccacia from '../public/images/bakes/focaccia_for_max22.jpg'
import Baja from '../public/images/bakes/jan_23/baja_tacos_2.jpg'
import Falafel from '../public/images/bakes/jan_23/falafel_1.jpg'
import Pajeon from '../public/images/bakes/jan_23/pa_jeon_1.jpg'
import Kombucha from '../public/images/bakes/jan_23/kombucha_4.jpg'

// import FocaGanoush from '../public/images/bakes/focaccia_baba_ganoush_june_22'
// import { motion } from 'framer-motion'

const Bakes = () => {
  return (
    <Layout title="Bakes">
      <Container maxW="container.lg">
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
          <Section delay={0.1}>
            <BakeGridItem
              id="kombucha"
              title="Kombucha"
              alt="Kombucha"
              thumbnail={Kombucha.src}
            >
              Fermented tea; it&apos;s all the rave!
            </BakeGridItem>
          </Section>
          <Section delay={0.1}>
            <BakeGridItem
              id="pa_jeon"
              title="Pa Jeon (Korean Pancake)"
              alt="Pa Jeon (Korean Pancake)"
              thumbnail={Pajeon.src}
            >
              Korean style vegtable and spring onion pancake.
            </BakeGridItem>
          </Section>
          <Section delay={0.2}>
            <BakeGridItem
              id="falafel"
              title="Falafel and Pita"
              alt="Falafel and Pita"
              thumbnail={Falafel.src}
            >
              Lebanese style falafel and pita.
            </BakeGridItem>
          </Section>
          <Section delay={0.2}>
            <BakeGridItem
              id="baja_tacos"
              title="Baja Fish Tacos"
              alt="Baja Fish Tacos"
              thumbnail={Baja.src}
            >
              I love Baja style fish tacos so much, but nobody ever does them
              right in the UK!
            </BakeGridItem>
          </Section>
          <Section delay={0.3}>
            <BakeGridItem
              id="ciabatta"
              title="Ciabatta"
              alt="Ciabatta"
              thumbnail={Ciabatta.src}
            >
              First time making big puffy ciabatta!
            </BakeGridItem>
          </Section>
          <Section delay={0.3}>
            <BakeGridItem
              id="fig_pizza"
              title="Fig, Goats Cheese, Caramelised Onion"
              alt="Fig, Goats Cheese, Caramelised Onion Pizza"
              thumbnail={Figgy.src}
            >
              Balanace of delicate flavours, came together beautifully.
            </BakeGridItem>
          </Section>
          <Section delay={0.4}>
            <BakeGridItem
              id="pizza_aug_22"
              title="Nduja, Red Onion & Olive"
              alt="homecooked pizza"
              thumbnail={AugPizza.src}
            >
              Really enjoying the new found ability to build thickk crusts
            </BakeGridItem>
          </Section>
          <Section delay={0.4}>
            <BakeGridItem
              id="foccacia"
              title="Foccacia"
              alt="Foccacia"
              thumbnail={Foccacia.src}
            >
              Experiments with Italian foccacia bread, yum.
            </BakeGridItem>
          </Section>
          <Section delay={0.4}>
            <BakeGridItem
              id="pizza_anchovy_july_22"
              title="Anchovy, Capers, Chili and Parsley"
              alt="homecooked pizza"
              thumbnail={AnchPizza.src}
            >
              I love anchovies, and anyone that will enjoy them with me.{' '}
            </BakeGridItem>
          </Section>
          <Section delay={0.4}>
            <BakeGridItem
              id="pita_july_22"
              title="Pita Bread"
              alt="homecooked pita"
              thumbnail={Pita.src}
            >
              First time making pita bread from scratch!
            </BakeGridItem>
          </Section>
          <Section delay={0.4}>
            <BakeGridItem
              id="grapefruit_soda"
              title="Fermented Grapefruit Soda"
              alt="fermented grapefruit soda"
              thumbnail={GrapeFruit.src}
            >
              Grapefruit soda, naturally fizzy with a tiny booze kick
            </BakeGridItem>
          </Section>

          <Section delay={0.4}>
            <BakeGridItem
              id="dongchimi"
              title="Radish Water Kimchi (Dongchimi)"
              alt="Radish Water Kimchi (Dongchimi)"
              thumbnail={Dongchimi.src}
            >
              The milder and less known sibling to kimchi.
            </BakeGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Bakes
