import { Html, Head, Main, NextScript } from 'next/document'
import GoogleAnalyticsScripts from '../lib/ga.js'
export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <GoogleAnalyticsScripts />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
