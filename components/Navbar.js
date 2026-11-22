import Logo from './Logo.js'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  IconButton,
  Portal
} from '@chakra-ui/react'
import { IoMenu } from 'react-icons/io5'
import ThemeToggleButton from './Theme-Toggle-Button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = { base: 'black.200', _dark: 'whiteAlpha.900' }
  const activeColor = { base: 'gray.500', _dark: 'whiteAlpha.600' }
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined
  return (
    <Link
      asChild
      href={href}
      scroll={false}
      variant="nav"
      p={2}
      color={active ? activeColor : inactiveColor}
      target={target}
      rel={rel}
      {...props}
    >
      <NextLink href={href} scroll={false} target={target} rel={rel}>
        {children}
      </NextLink>
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="static"
      as="nav"
      w="100%"
      bg={{ base: '#FBF4E2', _dark: '#0B0827' }}
      css={{ backdropFilter: 'blur(100px)' }}
      zIndex={4}
      // borderColor={"green.300"}
      // borderWidth="thick"
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/bakes" path={path}>
            Bakes
          </LinkItem>
          {/* <LinkItem href="/thanks" path={path}>
            Thanks
          </LinkItem> */}
          <LinkItem
            target="_blank"
            href="https://github.com/skandog/p"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box zIndex={5} flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu.Root lazyMount unmountOnExit id="navbar-menu">
              <Menu.Trigger asChild>
                <IconButton variant="outline" aria-label="Open navigation menu">
                  <IoMenu />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="about" asChild>
                      <NextLink href="/">About</NextLink>
                    </Menu.Item>
                    <Menu.Item value="projects" asChild>
                      <NextLink href="/projects">Projects</NextLink>
                    </Menu.Item>
                    <Menu.Item value="bakes" asChild>
                      <NextLink href="/bakes">Bakes</NextLink>
                    </Menu.Item>
                    <Menu.Item value="source" asChild>
                      <a
                        href="https://github.com/skandog/p"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source
                      </a>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
