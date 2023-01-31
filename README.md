# ⛔️ Warning!

This library is not ready yet. Everything will be fine when version 1.0.0 is released.

<hr />

# RUI

<br />
<img src="./.github/logo-light.svg" alt="RUI - React User Interface" width="300">

This project was made in React to be lightweight and with few dependencies.

<p>
  <a href="https://caricati-ds.netlify.app/">
    <img src="https://img.shields.io/badge/weiste-demo-205EFC" alt="demo">
  </a>
  <a href="https://www.npmjs.com/package/@caricati/rui">
    <img src="https://img.shields.io/badge/package-npm-FA9703" alt="npm">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-292F3A" alt="MIT">
  </a>
  <img src="https://github.com/caricati-io/rui/actions/workflows/main.yml/badge.svg" alt="tests and build">
</p>

<hr />

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

## Using styled-components from library

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
