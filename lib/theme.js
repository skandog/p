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
          textUnderlineOffset: '3px',
          fontWeight: 'bold'
        },
        variants: {
          variant: {
            accent: {
              display: 'inline',
              gap: '0',
              color: { base: '#48A9A6', _dark: 'pink.400' },
              '&:has(svg)': {
                display: 'inline-flex',
                gap: '1.5'
              },
              _hover: {
                textDecoration: 'underline',
                textDecorationColor: 'currentColor'
              }
            },
            nav: {
              display: 'inline-flex',
              _hover: {
                textDecoration: 'underline',
                textDecorationColor: 'currentColor'
              }
            }
          }
        },
        defaultVariants: {
          variant: 'accent'
        }
      }),
      badge: defineRecipe({
        variants: {
          variant: {
            compact: {
              bg: 'colorPalette.subtle',
              color: 'colorPalette.fg',
              borderRadius: '2px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }
          },
          size: {
            compact: {
              textStyle: '2xs',
              px: '1',
              minH: '4'
            }
          }
        },
        defaultVariants: {
          variant: 'compact',
          size: 'compact'
        }
      })
    }
  }
})

const system = createSystem(defaultConfig, config)

export default system
