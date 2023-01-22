# @caricati/design-system

## To install
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
