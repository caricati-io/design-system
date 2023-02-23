import { useId } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import { inputFocusStyled } from './input.styled'

const Container = styled.div<{ isInline: boolean }>`
  display: ${({ isInline }) => (isInline ? 'inline-flex' : 'flex')};
  outline: none;

  &:not(&[aria-disabled='true']):focus div[data-checker] {
    outline: none;
    ${inputFocusStyled}
  }

  &[aria-disabled='true'] > * {
    opacity: 0.75;
    cursor: default;
  }
`

const Circle = styled.div<{ isChecked: boolean }>`
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease all 250ms;

  ${({ isChecked, theme }) => {
    if (isChecked) {
      return css`
        background-color: ${theme.color.primary};
        border: 1px solid ${theme.color.primary};

        &:before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background-color: ${theme.color.text};
          border-radius: 50%;
        }
      `
    }
    return css`
      background-color: ${theme.color.box};
      border: 1px solid ${theme.color.line};
    `
  }}
`

const Label = styled.p`
  margin: 0 0 0 0.5rem;
`

export interface Props {
  label?: string
  inline?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?(checked: boolean): void
}

export default function Radio({
  onChange,
  label,
  inline = false,
  checked = false,
  disabled = false,
}: Props) {
  const id = useId()
  const handleClick = () => {
    if (!disabled) onChange?.(!checked)
  }

  return (
    <Container
      role="radio"
      tabIndex={0}
      isInline={inline}
      aria-labelledby={id}
      aria-disabled={disabled}
      onClick={handleClick}
      aria-checked={checked}
      onKeyDown={(event) => keyActionClick(event, handleClick)}
    >
      <Circle isChecked={checked} data-checker />
      {!!label && <Label id={id}>{label}</Label>}
    </Container>
  )
}
