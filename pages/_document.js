import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from '../lib/theme.js';


console.log('heres your object: ', NextDocument)

let Document = class {
   
    render () {
        return(
            <Html lang="en">
<Head />
<body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Main />
    <NextScript />
</body>
            </Html>
        )
    }
}

export default Document