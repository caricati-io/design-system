import styled from 'styled-components'
import ButtonClean from './clean'

const Container = styled(ButtonClean)`
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 0.625rem;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

interface Props {
  onClick?(): void
  children: React.ReactNode
}

export default function GhostButton({ children, onClick }: Props) {
  return (
    <Container type="button" onClick={onClick}>
      {children}
    </Container>
  )
}
