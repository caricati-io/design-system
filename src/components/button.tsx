import styled from 'styled-components'

const Container = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`

interface Props {
  children: string
}

export default function Button({ children }: Props) {
  return <Container>{children}</Container>
}
