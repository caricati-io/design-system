import styled from 'styled-components'
import { Provider } from './context'

const Container = styled.div<{ panelDanger: boolean }>`
  border-radius: 0.625rem;
  border: 2px solid
    ${({ theme, panelDanger }) =>
      panelDanger ? theme.color.lineDanger : theme.color.line};
`

export interface Props {
  danger?: boolean
  children: React.ReactNode
}

export default function Panel({ children, danger = false }: Props) {
  return (
    <Provider value={{ danger }}>
      <Container panelDanger={danger}>{children}</Container>
    </Provider>
  )
}
