<center>
  <img src="./.storybook/logo.svg" alt="Caricati.io - Design System" />
  <br />
  <div>
    <a href="https://caricati-ds.netlify.app/" target="_blank">
      <img src="https://img.shields.io/badge/weiste-demo-blue" alt="demo">
    </a>
  </div>
</center>

This project was made in React to be lightweight and with few dependencies.


# Warning! This library is not ready yet. Everything will be fine when version 1.0.0 is released.

## Install in your React project
First, you need to install by command line using npm or yarn:

```
npm install @caricati/design-system --save
```

and then, install the `<DesignSystemProvider />` in your root component:

```
import { DesignSystemProvider } from '@caricati/design-system'
...
ReactDOM.render(
  <React.StrictMode>
    <DesignSystemProvider>
      <App />
    </DesignSystemProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
```



## Using styled-components from Design System

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
