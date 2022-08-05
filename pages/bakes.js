import { Box, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

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
          I love to cook, bake and ferment exciting food!
        </Box>
      </Container>
    </Layout>
  )
}

export default Bakes
