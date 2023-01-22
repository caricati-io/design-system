import styled from 'styled-components'

const Container = styled.div`
  padding: 0.625rem 1.25rem;
`

export interface Props {
  className?: string
  children: React.ReactNode
}

export default function ModalBody({ className, children }: Props) {
  return <Container className={className}>{children}</Container>
}
