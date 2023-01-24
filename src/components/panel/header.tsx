import { useContext } from 'react'
import styled from 'styled-components'
import panelContext from './context'

const Header = styled.div<{ danger: boolean }>`
  min-height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  background-color: ${({ theme, danger }) =>
    danger ? theme.color.boxDanger : theme.color.box};
  border-bottom: 2px solid
    ${({ theme, danger }) =>
      danger ? theme.color.lineDanger : theme.color.line};
  border-radius: 0.5rem 0.5rem 0 0;

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`

export interface Props {
  title: string
  children?: React.ReactNode
}

export default function PanelHeader({ title, children }: Props) {
  const { danger } = useContext(panelContext)
  return (
    <Header danger={danger}>
      <h3>{title}</h3>
      <Right>{children}</Right>
    </Header>
  )
}
