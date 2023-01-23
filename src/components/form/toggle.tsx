import { useId } from 'react'
import styled from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import { inputFocusStyled } from './input.styled'

const Container = styled.div``

const Box = styled.div`
  width: 58px;
  height: 2.125rem;
  border-radius: 1.125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
  transition: ease all 250ms;
  background-color: ${({ theme }) => theme.color.box};
  border: 1px solid ${({ theme }) => theme.color.line};

  &::before {
    content: '';
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    transition: ease all 250ms;
    background-color: ${({ theme }) => theme.color.boxLight};
  }

  &:not([aria-disabled='true']):focus {
    outline: none;
    ${inputFocusStyled}
  }

  &[aria-disabled='true'] {
    opacity: 0.75;
    cursor: default;
  }

  &[aria-checked='true'] {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};

    &::before {
      background-color: ${({ theme }) => theme.color.primaryText};
      transform: translateX(84%);
    }
  }
`

const Label = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: inline-block;
`

export interface Props {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?(checked: boolean): void
}

export default function Toggle({
  label,
  onChange,
  checked = false,
  disabled = false,
}: Props) {
  const labelId = useId()
  const handleClick = () => {
    if (!disabled) onChange?.(!checked)
  }

  return (
    <Container>
      {label && <Label id={labelId}>{label}</Label>}
      <Box
        tabIndex={0}
        role="checkbox"
        onClick={handleClick}
        aria-checked={checked}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        onKeyDown={(event) => keyActionClick(event, handleClick)}
      />
    </Container>
  )
}
