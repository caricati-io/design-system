import styled from 'styled-components'

const Body = styled.div`
  padding: 1.25rem;
  border-radius: 0 0 0.625rem 0.625rem;
`

export interface Props {
  children: React.ReactNode
}

export default function PanelBody({ children }: Props) {
  return <Body>{children}</Body>
}
