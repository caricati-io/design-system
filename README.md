<div style="text-align: center;">
  <img src="./.storybook/logo.svg" alt="Caricati.io - Design System">
  <div style="margin: 2rem 0;">
    <a href="https://caricati-ds.netlify.app/" target="_blank">
      <img src="https://img.shields.io/badge/weiste-demo-blue" alt="demo">
    </a>
  </div>
</div>

This project was made in React to be lightweight and with few dependencies.


## Install in your React project

```
npm install @caricati/design-system --save
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
