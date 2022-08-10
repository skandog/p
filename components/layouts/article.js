import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item.js'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  const s = `${title} - Skanfolio`

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      // style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{s}</title>
            {/* <meta name="twitter:title" content={s} />
                <meta property="og:title" content={s} /> */}
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
