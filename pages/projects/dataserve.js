import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta } from '../../components/project.js'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'
import dataServe_logo from '../../public/images/projects/dataServe_logo.png'


const Project = () => {
    return (
        <Layout title="Backpack">
            <Container>
                <Title>
                    dataServe <Badge ml={'10px'}>2023 - Present</Badge>
                </Title>
                <P>
                    <NextLink href="https://www.aimdataserve.co.uk/" passHref>
                        <Link target="_blank">Dataserve</Link>
                    </NextLink>{' '}
                    from{' '}
                    <NextLink href="https://www.aimltd.uk/" passHref>
                        <Link target="_blank">Aim Ltd</Link>
                    </NextLink>,{' '}                                      
                    is a single, modern and easy to use website for self-service needs across all teams and systems.
                    A midpoint for an organisations numerous disparate applications, using the latest AI technology it 
                    gets users to their solution quickly and accurately.
                    <br />
                    <br />
                    This is a fantastic application to be a part of, always looking at the cutting edge of tech, including machine learning,
                    neural networks and leveraging large language models such as ChatGPT.
                    <br />
                    <br />
                    I have been heavily involved with dataServe since 2023, and particulalry enjoyed overhauling and adding new features to the page builder component,
                    as well as taking a lead role on the reporting functions within the app.
                </P>
                <List ml={4} my={2}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://www.aimdataserve.co.uk/"
                            target='_blank'
                        >
                            dataServe <ExternalLinkIcon mx={'2px'} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            TypeScript, Javascript, React.js, Node.js, Sails.js, MongoDB, ChatGPT, Redux, Mui, Chart.js, Elastic, Redis, Docker, WSL
                        </span>
                    </ListItem>
                </List>
                <Divider my={8} />

                <ProjectImage src={dataServe_logo.src} alt="dataServe" />
            </Container>
        </Layout>
    )
}

export default Project
