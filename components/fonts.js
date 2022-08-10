import { Global } from '@emotion/react'

const Fonts = () => (
  <>
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');`}
    />
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');`}
    />
  </>
)
// const Fonts = () => (
//   <Global
//     styles={`@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');`}
//   />
// )

export default Fonts
