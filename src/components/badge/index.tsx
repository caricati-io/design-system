import styled, { css } from 'styled-components'
import ButtonClean from '../button/clean'
import Icon, { IconType } from '../icon'

interface ContainerProps {
  badgeColor: BadgeColor
  isClickable: boolean
}

const Container = styled(ButtonClean)<ContainerProps>`
  height: 2rem;
  padding: 0 1rem;
  border-radius: 0.625rem;
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

type BadgeColor = 'green' | 'yellow' | 'red' | 'orange' | 'blue'

export interface Props {
  color?: 'green' | 'yellow' | 'red'
  onClick?: () => void
  rightIcon?: IconType
  label: string
}

export default function Badge({
  label,
  onClick,
  color = 'green',
  rightIcon,
}: Props) {
  return (
    <Container type="button" isClickable={!!onClick} badgeColor={color}>
      {label}
      {rightIcon && <RightIcon name={rightIcon} size={14} />}
    </Container>
  )
}
