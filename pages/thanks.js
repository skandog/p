import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { ThanksGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import TakuyaDog from '../public/images/thanks/takuya_dog.jpg'

const Thanks = () => {
  console.log(TakuyaDog)

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg="red.700"
          color="whiteAlpha.800"
          p={3}
          mt={10}
          mb={6}
          align="center"
        >
          To acknowledge those who have helped me
        </Box>
        <Heading>Thanks</Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ThanksGridItem
              id="takuya"
              title="Takuya Matsuyama (Craftzdog)"
              alt="Takuya Matsuyama"
              thumbnail={TakuyaDog.src}
            >
              Mr Matsuyama&apos;s video tutorial was the basis for this site
            </ThanksGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Thanks
