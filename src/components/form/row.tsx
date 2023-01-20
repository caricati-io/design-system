import styled, { css } from 'styled-components'

const Container = styled.div<{ spacingDown: string; hasActions: boolean }>`
  margin-bottom: ${({ spacingDown }) => spacingDown};

  ${({ hasActions }) =>
    hasActions &&
    css`
      display: flex;
      & > button:not(:last-child) {
        margin-right: 1rem;
      }
    `}
`

interface Props {
  type?: 'button-group'
  spacingDown?: string
  children: React.ReactNode
}

export default function Row({
  type,
  children,
  spacingDown = '1.25rem',
}: Props) {
  return (
    <Container spacingDown={spacingDown} hasActions={type === 'button-group'}>
      {children}
    </Container>
  )
}
