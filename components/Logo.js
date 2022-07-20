import Link from 'next/link'


import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogBox = styled.span`
font-weight: bold;
`

// const LogoBox = styled.span`
//   font-weight: bold;
//   font-size: 18px;
//   display: inline-flex;
//   align-items: center;
//   height: 30px;
//   line-height: 20px;
//   padding: 10px;
//   img {
//     transition: 200ms ease;
//   }
//   &:hover img {
//     transform: rotate(20deg);
//   }
// `

const Logo = () => {
    const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}.png`
    
    return (
        <Link href="/" scroll={false}>
          <a>
          <LogBox>

            <span style={{"font-weight": "bold", "font-size": "18px","display": "inline-flex",  "align-items": "center",   "height": "50px",   "line-height": "20px", "padding": "30px"}}>
              <Image src={dogImg} width={30} height={30} alt="logo" />
              <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
              >
                Skandy Rattray
              </Text>
            </span>
          </LogBox>
          </a>
        </Link>
      )
    }
    
    export default Logo
   