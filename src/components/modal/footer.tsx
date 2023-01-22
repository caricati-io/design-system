import styled, { css } from 'styled-components'

const Container = styled.div<{ hasButtonGap: boolean }>`
  display: flex;
  padding: 1.25rem;
  border-top: 2px solid ${({ theme }) => theme.colors.lineLight};

  ${({ hasButtonGap }) => hasButtonGap && css`
    & > button:not(:last-child) {
      margin-right: 0.625rem;
    }
  `}
`

export interface Props {
  className?: string
  hasButtonGap?: boolean
  children: React.ReactNode
}

export default function ModalFooter({
  children,
  className,
  hasButtonGap = false,
}: Props) {
  return (
    <Container className={className} hasButtonGap={hasButtonGap}>
      {children}
    </Container>
  )
}
