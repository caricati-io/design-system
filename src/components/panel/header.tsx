import { useContext } from 'react'
import styled from 'styled-components'
import Icon, { IconNames } from '../icon'
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
    display: flex;
    align-items: center;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`

const LeftIcon = styled(Icon)<{ isDanger: boolean }>`
  color: ${({ theme, isDanger }) =>
    isDanger ? theme.color.textDanger : theme.color.textLight};
  margin-right: 1rem;
`

export interface Props {
  title: string
  children?: React.ReactNode
  icon?: IconNames
  iconFill?: boolean
}

export default function PanelHeader({
  title,
  icon,
  children,
  iconFill,
}: Props) {
  const { danger } = useContext(panelContext)
  return (
    <Header danger={danger}>
      <h3>
        {icon && (
          <LeftIcon size={20} isDanger={danger} name={icon} fill={iconFill} />
        )}
        {title}
      </h3>
      <Right>{children}</Right>
    </Header>
  )
}
