import styled, { css } from 'styled-components'

type StyleType = 'primary' | 'default'
type SizeType = 'normal' | 'small'

const defaultShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'

const Container = styled.button<{ styleType: StyleType; sizeType: SizeType }>`
  ${({ theme, styleType, sizeType }) => css`
    font-size: 1rem;
    border-radius: 0.75rem / 1rem;
    padding: 0 1.75rem;
    cursor: pointer;
    font-weight: 700;
    box-shadow: ${defaultShadow};
    transition: all ease-in-out 250ms;

    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    &:disabled {
      cursor: default;
      box-shadow: none;
    }

    ${(() => {
      if (styleType === 'primary') {
        return css`
          color: ${theme.colors.primaryText};
          background-color: ${theme.colors.primary};
          border: 1px solid rgba(255, 255, 255, 0.1);

          &:disabled {
            color: ${theme.colors.primaryTextDisabled};
          }

          &:focus {
            box-shadow: ${defaultShadow}, ${theme.shadows.btnPrimaryFocus};
          }
        `
      }
      return css`
        color: ${theme.colors.inputText};
        background-color: ${theme.colors.input};
        border: 1px solid rgba(255, 255, 255, 0.05);

        &:disabled {
          color: ${theme.colors.inputTextDisabled};
        }

        &:focus {
          box-shadow: ${defaultShadow}, ${theme.shadows.btnDefaultFocus};
        }
      `
    })()}

    ${(() => {
      if (sizeType === 'small') {
        return css`
          height: 40px;
          line-height: 40px;
        `
      }
      return css`
        height: 44px;
        line-height: 44px;
      `
    })()}
  `}
`

export interface Props {
  small?: boolean
  submit?: boolean
  primary?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export default function Button({
  small,
  submit,
  primary,
  onClick,
  disabled,
  children,
}: Props) {
  const styleType = primary ? 'primary' : 'default'
  const sizeType = small ? 'small' : 'normal'
  return (
    <Container
      disabled={disabled}
      sizeType={sizeType}
      styleType={styleType}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </Container>
  )
}
