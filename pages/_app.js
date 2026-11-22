import React from 'react'
import Layout from '../components/layouts/main.js'
import '../styles/globals.css'
import Fonts from '../components/fonts.js'
import Providers from '../components/providers.js'

import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <Providers>
      <Fonts />

      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Providers>
  )
}

export default Website
