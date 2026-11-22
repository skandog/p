import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import system from '../lib/theme.js'

// Chakra 3 delegates color mode state to next-themes. These small adapters
// preserve the hooks used throughout the Pages Router. next-themes applies
// the persisted/system class before hydration, so theme-dependent values must
// use the same light fallback during SSR and the first client render. This
// prevents React from aborting hydration when the system is dark.
const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false
const useMounted = () =>
  useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)

export const useColorMode = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const colorMode = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  return {
    colorMode,
    toggleColorMode: () => setTheme(colorMode === 'dark' ? 'light' : 'dark')
  }
}

export const useColorModeValue = (lightValue, darkValue) => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  return mounted && resolvedTheme === 'dark' ? darkValue : lightValue
}

const Providers = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default Providers
