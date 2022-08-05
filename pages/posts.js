import { Box, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => {
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
          Posts
        </Box>
      </Container>
    </Layout>
  )
}

export default Posts
