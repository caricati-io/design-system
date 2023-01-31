# ⛔️ Warning!

This library is not ready yet. Everything will be fine when version 1.0.0 is released.

<hr />

<img src="./.github/logo-light.svg" alt="RUI - React User Interface" width="300">
<p>
  <a href="https://caricati-ds.netlify.app/">
    <img src="https://img.shields.io/badge/weiste-demo-205EFC" alt="demo">
  </a>
  <img src="https://github.com/caricati-io/rui/actions/workflows/main.yml/badge.svg" alt="tests and build">
  <a href="https://codecov.io/gh/caricati-io/rui" > 
    <img src="https://codecov.io/gh/caricati-io/rui/branch/main/graph/badge.svg?token=G9V23U4BNJ"/>
  </a>
  <a href="https://www.npmjs.com/package/@caricati/rui">
    <img src="https://img.shields.io/badge/package-npm-FA9703" alt="npm">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-292F3A" alt="MIT">
  </a>
</p>

# RUI

This project was made in React to be lightweight and with few dependencies.

## Install in your React project

First, you need to install by command line using npm or yarn:

```
npm install @caricati/rui --save
```

and then, install the `<InstallRui />` in your root component:

```
import { InstallRui } from '@caricati/rui'
...
ReactDOM.render(
  <React.StrictMode>
    <InstallRui>
      <App />
    </InstallRui>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

## Use styled-components from rui

```
import { styled, useTheme } from '@caricati/rui'

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
