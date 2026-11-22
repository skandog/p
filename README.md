# Skanfolio

Portfolio site for Skandy. I built this site intially by following a tutorial by the talented [Takuya Matsuyama](https://github.com/craftzdog) and then 
going over everything and customising to both better understand everything that was being used and to make it my own.

[skandog.com](https://skandog.com/)

[![Skanfolio Homepage](public/images/projects/skanfolio_dark.png "Skanfolio Homepage")](http://p-skandog.vercel.app/)


## Tech Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Emotion Styled Components](https://emotion.sh/docs/styled) - Styling library for React

## Local development

This repository uses Yarn Classic and the dependency versions recorded in `yarn.lock`.
Node.js 26 (the current deployment runtime) and Yarn Classic are recommended. With
both installed:

```bash
yarn install
yarn dev
```

The site does not require a database or other local service. It uses the existing Google
Tag Manager container by default. To use a different container locally, set
`NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` in `.env.local`, which is ignored by Git. Never commit
credentials or private configuration.



## Structure

```
$ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images
└── public
```
