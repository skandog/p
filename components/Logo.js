import Link from 'next/link'

import "./Logo.module.css"
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
// import styled from '@emotion/styled'


// const LogBox = styled.span`
// font-weight: bold;
// `

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

// style={{"font-weight": "bold", "font-size": "18px","display": "inline-flex",  "align-items": "center",   "height": "50px",   "line-height": "20px", "padding": "30px"}}
// 

const Logo = () => {
    const dogImg = `/images/skandy-logo${useColorModeValue('', '-dark')}-v3.png`
    
    return (
        <Link href="/" scroll={false}>
          <a>

            <span className='LogoBox' style={{"font-weight": "bold", "font-size": "90%","display": "inline-flex",  "align-items": "center",   "height": "50px",   "line-height": "20px", "padding": "30px"}}>
              <Image src={dogImg} width={70} height={50} alt="logo" />
              <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontWeight="bold"
                ml={3}
                fontFamily='"M PLUS Rounded 1c", "sans-serif"'

              >
                Skandy Rattray
              </Text>
            </span>
          </a>
        </Link>
      )
    }
    
    export default Logo
   