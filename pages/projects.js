import { Box, Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import skandy from '../public/images/skandy-logo-v3.png'

const Projects = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="blue.700"
        color="whiteAlpha.800"
        p={3}
        mt={10}
        mb={6}
        align="center"
      >
        Here is some of my favourite work
      </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="skandy" title="Skandy" thumbnail={skandy}>
            A skandy app
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
