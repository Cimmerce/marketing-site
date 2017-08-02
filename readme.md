# Cimmerse marketing site

This project generates HTML and javascript for the static marketing site at cimmerse.com.

It is based on Gatsby, a React.js static site generator:
https://github.com/gatsbyjs/gatsby/

## Folder structure

- **components** - React components
- **pages/pages** - any sub pages for the site
- **pages/index.jsx** - the index of the site
- **pages/_template.jsx** - the main template of the site
- **styles/components** - the styles for components
- **styles/index.scss** - stylesheet for the index page
- **config.toml** - configuration file
- **utils** - utilities such as typography.js
- **gatsby-node.js** - webpack configuration overrides
- **html.jsx** - the main html tree

## Development

### Prerequisites

yarn must be installed:

```
brew install yarn
```

### Installation

Install packages:

```
yarn
```

### Running

```
yarn run develop
```
