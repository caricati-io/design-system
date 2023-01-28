# ⛔️ Warning!
This library is not ready yet. Everything will be fine when version 1.0.0 is released.

<hr />
<br />
<img src="./.storybook/logo.svg" alt="Caricati.io - Design System" width="400">

This project was made in React to be lightweight and with few dependencies.

<p>
  <a href="https://caricati-ds.netlify.app/">
    <img src="https://img.shields.io/badge/weiste-demo-205EFC" alt="demo">
  </a>
  <a href="https://www.npmjs.com/package/@caricati/design-system">
    <img src="https://img.shields.io/badge/package-npm-FA9703" alt="npm">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-292F3A" alt="MIT">
  </a>
  <img src="https://github.com/caricati-io/design-system/actions/workflows/main.yml/badge.svg" alt="tests and build">
</p>

<hr />

## Install in your React project
First, you need to install by command line using npm or yarn:

```
npm install @caricati/design-system --save
```

and then, install the `<InstallDesignSystem />` in your root component:

```
import { InstallDesignSystem } from '@caricati/design-system'
...
ReactDOM.render(
  <React.StrictMode>
    <InstallDesignSystem>
      <App />
    </InstallDesignSystem>
  </React.StrictMode>,
  document.getElementById('root'),
)
```



## Using styled-components from library

```
import { styled, useTheme } from '@caricati/design-system'

const Container = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
`

function Component() {
  const { color } = useTheme()
  ...
  return (
    <Container>
      <aside>Sidebar</aside>
      <div>Container</div>
    </Container>
  )
}
```
