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

const Box = styled.div<{ isChecked: boolean }>`
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 0.25rem;
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
  cursor: pointer;
`

export interface Props {
  onChange?(checked: boolean): void
  label?: string
  inline?: boolean
  checked?: boolean
  disabled?: boolean
}

export default function Checkbox({
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
      tabIndex={0}
      role="checkbox"
      isInline={inline}
      aria-labelledby={id}
      onClick={handleClick}
      aria-checked={checked}
      aria-disabled={disabled}
      onKeyDown={(event) => keyActionClick(event, handleClick)}
    >
      <Box isChecked={checked} data-checker>
        {checked && (
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7526 2.55883C12.9909 2.33069 13.3081 2.20456 13.6372 2.20707C13.9663 2.20957 14.2815 2.34051 14.5164 2.57225C14.7513 2.80399 14.8875 3.11841 14.8962 3.44917C14.9049 3.77992 14.7854 4.10114 14.563 4.34503L7.81189 12.8337C7.6958 12.9595 7.55569 13.0603 7.39993 13.1304C7.24418 13.2004 7.07598 13.2381 6.90539 13.2413C6.7348 13.2445 6.56532 13.213 6.4071 13.1488C6.24887 13.0847 6.10514 12.9891 5.9845 12.8678L1.50742 8.36654C1.38274 8.24973 1.28273 8.10888 1.21337 7.95237C1.14402 7.79587 1.10672 7.62692 1.10371 7.45561C1.10071 7.2843 1.13205 7.11414 1.19588 6.95527C1.2597 6.79641 1.3547 6.65209 1.4752 6.53094C1.59571 6.40978 1.73925 6.31427 1.89726 6.25011C2.05528 6.18594 2.22453 6.15442 2.39492 6.15745C2.56531 6.16047 2.73335 6.19796 2.88901 6.2677C3.04468 6.33743 3.18478 6.43797 3.30096 6.56332L6.84405 10.1238L12.7204 2.59626C12.731 2.58316 12.7423 2.57067 12.7543 2.55883H12.7526Z"
              fill="currentColor"
            />
          </svg>
        )}
      </Box>
      {!!label && <Label id={id}>{label}</Label>}
    </Container>
  )
}
