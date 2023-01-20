import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  & > button:focus {
    position: relative;
    z-index: 1;
  }

  & > button:not(:first-child) {
    border-left: 0;
  }

  & > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > button:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-radius: 0;
  }
`

export interface Props {
  children: React.ReactNode
}

export default function ButtonGroup({ children }: Props) {
  return <Container>{children}</Container>
}
