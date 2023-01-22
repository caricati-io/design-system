import styled, { css } from 'styled-components'
import Icon, { IconType } from '../icon'

type StyleType = 'primary' | 'default'
type SizeType = 'normal' | 'small'

const defaultShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'

const Container = styled.button<{ styleType: StyleType; sizeType: SizeType }>`
  ${({ theme, styleType, sizeType }) => css`
    border-radius: 0.625rem;
    padding: 0 1.75rem;
    cursor: pointer;
    font-weight: 700;
    box-shadow: ${defaultShadow};
    transition: all ease-in-out 250ms;
    display: flex;
    align-items: center;

    &:hover {
      box-shadow: ${theme.shadow.btnHover};
    }

    &:disabled {
      cursor: default;
      box-shadow: none;
      opacity: 0.75;
    }

    ${(() => {
      if (styleType === 'primary') {
        return css`
          color: ${theme.color.primaryText};
          background-color: ${theme.color.primary};
          border: 1px solid rgba(255, 255, 255, 0.1);

          &:focus {
            box-shadow: ${defaultShadow}, ${theme.shadow.btnPrimaryFocus};
          }
        `
      }
      return css`
        color: ${theme.color.btnDefaultText};
        background-color: ${theme.color.btnDefault};
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:focus {
          box-shadow: ${defaultShadow}, ${theme.shadow.btnDefaultFocus};
        }
      `
    })()}

    ${(() => {
      if (sizeType === 'small') {
        return css`
          font-size: 0.875rem;
          height: 38px;
          line-height: 38px;
          padding: 0 1.375rem;
        `
      }
      return css`
        font-size: 1rem;
        height: 42px;
        line-height: 42px;
        padding: 0 1.5rem;
      `
    })()}
  `}
`

const LeftIcon = styled(Icon)`
  margin-right: 0.625rem;
  margin-left: -4px;
`

const RightIcon = styled(Icon)`
  margin-left: 0.625rem;
  margin-right: -4px;
`

export interface Props {
  small?: boolean
  submit?: boolean
  primary?: boolean
  className?: string
  disabled?: boolean
  children: React.ReactNode
  leftIcon?: IconType
  rightIcon?: IconType
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export default function Button({
  small,
  submit,
  primary,
  onClick,
  disabled,
  children,
  className,
  leftIcon,
  rightIcon,
}: Props) {
  const styleType = primary ? 'primary' : 'default'
  const sizeType = small ? 'small' : 'normal'
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      sizeType={sizeType}
      className={className}
      styleType={styleType}
      type={submit ? 'submit' : 'button'}
    >
      {leftIcon && <LeftIcon name={leftIcon} size={20} />}
      {children}
      {rightIcon && <RightIcon name={rightIcon} size={20} />}
    </Container>
  )
}
