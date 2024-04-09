import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Divider,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import dataBelt_logo from '../../public/images/projects/dataBelt_logo.png'
import dataBelt_logo_light from '../../public/images/projects/dataBelt_logo_light.png'




const Project = () => {
    return (
        <Layout title="dataBelt">
            <Container>
                <Title>
                    databelt <Badge ml={'10px'}>2023 - Present</Badge>
                </Title>
                <P>
                    <NextLink href="https://www.aimdatabelt.uk/" passHref>
                        <Link target="_blank">Databelt</Link>
                    </NextLink>{' '}
                    is the flagship application from{' '}
                    <NextLink href="https://www.aimltd.uk/" passHref>
                        <Link target="_blank">Aim Ltd</Link>
                    </NextLink>.{' '}                                      
                    It is a platform designed to provide a suite of tools to solve all of 
                    the pesky challenges of data governance in the modern age.
                    <br />
                    <br />
                    An incredibly complex application, it allows organisations to get an easy handle
                    on all of its data, both structured and un-structured.
                    <br />
                    <br />
                    Working on dataBelt is great as it poses so many technically difficult challenges!
                    I have played a big part in building out the CMDB component, as well as enhancing 
                    its reporting functionality.
                </P>
                <List ml={4} my={2}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://www.aimdatabelt.uk/"
                            target='_blank'
                        >
                            dataBelt <ExternalLinkIcon mx={'2px'} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Javascript, Python, Angular.js, Node.js, Sails.js, MongoDB, Gulp, Chart.js, d3, Elastic, Redis, Docker, WSL
                        </span>
                    </ListItem>
                </List>
                <Divider my={8} />

                <ProjectImage src={useColorModeValue(dataBelt_logo_light.src, dataBelt_logo.src)} alt="dataBelt" />
            </Container>
        </Layout>
    )
}

export default Project
