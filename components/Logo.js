import Link from 'next/link'

// import './Logo.module.css'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;

  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={dogImg} width={70} height={50} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            fontSize={'3xl'}
            ml={3}
            fontFamily='Caveat, "cursive"'
          >
            Skandy Rattray
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
