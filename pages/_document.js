import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import GoogleAnalyticsScripts from '../lib/ga.js'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <GoogleAnalyticsScripts />

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
