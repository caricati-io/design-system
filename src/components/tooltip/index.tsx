import styled, { css } from 'styled-components'

type Position = 'top' | 'bottom' | 'left' | 'right'

const Container = styled.div`
  position: relative;

  & > [role='tooltip'] {
    visibility: hidden;
    opacity: 0;

    transition-property: opacity, visibility;
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }

  &:hover [role='tooltip'] {
    visibility: visible;
    opacity: 1;
  }
`

const Label = styled.div<{ tooltipPos: Position }>`
  position: absolute;
  white-space: nowrap;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.color.box};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.25rem;
  padding: 0.5rem 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    background-color: ${({ theme }) => theme.color.box};
    transform: rotate(45deg);
  }

  ${({ tooltipPos }) => {
    if (tooltipPos === 'bottom') {
      return css`
        top: 100%;
        left: 50%;
        transform: translate(-50%, 1.5rem);
        &::after {
          left: calc(50% - 6px);
          top: -7px;
          border-top: 1px solid ${({ theme }) => theme.color.line};
          border-left: 1px solid ${({ theme }) => theme.color.line};
        }
      `
    }
    if (tooltipPos === 'left') {
      return css`
        top: 50%;
        right: 100%;
        transform: translate(-1.5rem, -50%);
        &::after {
          left: calc(100% - 7px);
          top: calc(50% - 7px);
          border-top: 1px solid ${({ theme }) => theme.color.line};
          border-right: 1px solid ${({ theme }) => theme.color.line};
        }
      `
    }
    if (tooltipPos === 'right') {
      return css`
        top: 50%;
        left: 100%;
        transform: translate(1.5rem, -50%);
        &::after {
          right: calc(100% - 6px);
          top: calc(50% - 7px);
          border-bottom: 1px solid ${({ theme }) => theme.color.line};
          border-left: 1px solid ${({ theme }) => theme.color.line};
        }
      `
    }
    return css`
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, -1.5rem);
      &::after {
        left: calc(50% - 6px);
        bottom: -7px;
        border-bottom: 1px solid ${({ theme }) => theme.color.line};
        border-right: 1px solid ${({ theme }) => theme.color.line};
      }
    `
  }}
`

export interface Props {
  label: string
  className?: string
  position?: Position
  children: React.ReactNode
}

export default function Tooltip({
  label,
  children,
  className,
  position = 'top',
}: Props) {
  return (
    <Container className={className}>
      <Label role="tooltip" tooltipPos={position}>
        {label}
      </Label>
      {children}
    </Container>
  )
}
