import React from "react";
import {Container, Box, Heading} from "@chakra-ui/react"
const Page = () => {
    return ( 
        <Container>
<Box borderRadius="lg" bg="red" p={3} mb={6} align="center" >
Hello, I&apos;m a full-stack developer based in London!
</Box>
<Box display={{md:'flex'}} >
    <Box flexGrow={1}>
        <Heading as="h2" variant="page-title" >Skandy Rattray</Heading>
        <p>Professional Bug Hunter / Developer</p>
    </Box>
</Box>

        </Container>
     );
}
 
export default Page;