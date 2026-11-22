import NextLink from 'next/link'

// import './Logo.module.css'
import Image from 'next/image'
import { Link, Text } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { useColorModeValue } from './providers.js'

const LogoBox = chakra('span', {
  base: {
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    height: '30px',
    lineHeight: '20px',
    padding: '10px',
    margin: '10px',
    '& img': { transition: '200ms ease' },
    '&:hover img': { transform: 'rotate(-20deg)' }
  }
})

const Logo = () => {
  const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Link asChild>
      <NextLink href="/" scroll={false}>
        <LogoBox>
          <Image src={dogImg} width={70} height={50} alt="logo" />
          <Text
            color={{ base: 'gray.800', _dark: 'whiteAlpha.900' }}
            fontWeight="bold"
            fontSize={'3xl'}
            ml={3}
            fontFamily='Caveat, "cursive"'
          >
            Skandog
          </Text>
        </LogoBox>
      </NextLink>
    </Link>
  )
}

export default Logo
