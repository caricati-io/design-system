import styled from 'styled-components'

export type AlertVariant = 'error' | 'success' | 'info' | 'warning'

const Container = styled.div<{ variant: AlertVariant }>`
  padding: 1rem 1.25rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, variant }) => {
    if (variant === 'error') {
      return theme.color.errorBg
    }
    if (variant === 'success') {
      return theme.color.successBg
    }
    if (variant === 'info') {
      return theme.color.infoBg
    }
    if (variant === 'warning') {
      return theme.color.warningBg
    }
    return theme.color.input
  }};
`

export interface Props {
  variant?: AlertVariant
  className?: string
  children: React.ReactNode
}

export default function Alert({
  children,
  className,
  variant = 'info',
}: Props) {
  return (
    <Container variant={variant} className={className}>
      {children}
    </Container>
  )
}
