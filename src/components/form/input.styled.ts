import { css } from 'styled-components'

export const inputFocusStyled = css`
  border-color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.btnPrimaryFocus};
`

export const inputDisableStyled = css`
  color: ${({ theme }) => theme.color.inputTextDisabled};
  border-color: ${({ theme }) => theme.color.line};
  box-shadow: none;
  opacity: 0.75;
  cursor: default;
`

const inputStyled = css`
  width: 100%;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.input};
  border: 2px solid ${({ theme }) => theme.color.inputLine};
  outline: none;
  transition-timing-function: ease;
  transition-duration: 250ms;
  transition-property: box-shadow, border-color, background-color;

  &:disabled {
    ${inputDisableStyled}
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }

  &:focus {
    ${inputFocusStyled}
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border-color: ${({ theme }) => theme.color.line};
    -webkit-text-fill-color: ${({ theme }) => theme.color.text};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.input} inset;
    transition: background-color 5000s ease-in-out 0s;
    transition-timing-function: ease;
    transition-duration: 250ms;
    transition-property: box-shadow, border-color, background-color;

    &:focus {
      border-color: ${({ theme }) => theme.color.primary};
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.input} inset,
        ${({ theme }) => theme.shadow.btnPrimaryFocus};
    }
  }
`

export default inputStyled
