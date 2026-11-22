import {
  createSystem,
  defaultConfig,
  defineRecipe,
  defineConfig
} from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: '#FBFAF5', _dark: '#18143c' }
    }
  },
  theme: {
    tokens: {
      colors: {
        glassTeal: { value: '#48A9A6' }
      },
      fonts: {
        heading: { value: "'Caveat'" },
        body: { value: "'Raleway'" }
      }
    },
    recipes: {
      heading: defineRecipe({
        variants: {
          variant: {
            'section-title': {
              textDecoration: 'underline',
              fontSize: '20px',
              textUnderlineOffset: '6px',
              textDecorationColor: '#525252',
              textDecorationThickness: '4px',
              marginTop: '3',
              marginBottom: '4'
            }
          }
        }
      }),
      link: defineRecipe({
        base: {
          color: { base: '#48A9A6', _dark: 'pink.400' },
          textUnderlineOffset: '3px',
          fontWeight: 'bold'
        },
        variants: {
          variant: {
            nav: {
              _hover: {
                textDecoration: 'underline',
                textDecorationColor: 'currentColor'
              }
            }
          }
        }
      })
    }
  }
})

const system = createSystem(defaultConfig, config)

export default system
