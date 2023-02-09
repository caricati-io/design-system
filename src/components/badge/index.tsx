import styled, { css } from 'styled-components'

import ButtonClean from '../button/clean'
import Icon, { IconNames } from '../icon'

interface ContainerProps {
  isClickable: boolean
  badgeColor: BadgeVariant
}

const Container = styled(ButtonClean)<ContainerProps>`
  height: 2rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;

  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  ${({ badgeColor, theme }) => {
    if (badgeColor === 'yellow') {
      return css`
        color: ${theme.color.badgeYellowText};
        background-color: ${theme.color.badgeYellowBg};
      `
    }

    if (badgeColor === 'red') {
      return css`
        color: ${theme.color.badgeRedText};
        background-color: ${theme.color.badgeRedBg};
      `
    }

    if (badgeColor === 'orange') {
      return css`
        color: ${theme.color.badgeOrangeText};
        background-color: ${theme.color.badgeOrangeBg};
      `
    }

    if (badgeColor === 'blue') {
      return css`
        color: ${theme.color.badgeBlueText};
        background-color: ${theme.color.badgeBlueBg};
      `
    }

    return css`
      color: ${theme.color.badgeGreenText};
      background-color: ${theme.color.badgeGreenBg};
    `
  }}
`

const RightIcon = styled(Icon)`
  margin-left: 8px;
`

export type BadgeVariant = 'green' | 'yellow' | 'red' | 'orange' | 'blue'

export interface Props {
  variant?: BadgeVariant
  onClick?: () => void
  rightIcon?: IconNames
  label: string
}

export default function Badge({
  label,
  onClick,
  rightIcon,
  variant = 'green',
}: Props) {
  return (
    <Container
      type="button"
      onClick={onClick}
      badgeColor={variant}
      isClickable={!!onClick}
    >
      {label}
      {rightIcon && <RightIcon name={rightIcon} size={14} />}
    </Container>
  )
}
