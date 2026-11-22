import { AnimatePresence, motion } from 'framer-motion'
import { ClientOnly, IconButton } from '@chakra-ui/react'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useColorMode, useColorModeValue } from './providers.js'

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ClientOnly
      fallback={
        <IconButton
          aria-hidden="true"
          visibility="hidden"
          aria-label="Loading theme control"
        />
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label={
              colorMode === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            colorPalette={useColorModeValue('blue', 'orange')}
            onClick={toggleColorMode}
          >
            {useColorModeValue(<IoMoon />, <IoSunny />)}
          </IconButton>
        </motion.div>
      </AnimatePresence>
    </ClientOnly>
  )
}

export default ThemeToggleButton
