import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import '../styles/globals.css'
import Fonts from '../components/fonts.js'
import theme from '../lib/theme.js'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
