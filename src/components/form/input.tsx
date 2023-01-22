import React, { useId } from 'react'
import styled from 'styled-components'
import ButtonClean from '../button/clean'
import Icon, { IconType } from '../icon'

const Container = styled.div`
  position: relative;
`

const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
  display: inline-block;
`

const Inp = styled.input`
  height: 42px;
  width: 100%;
  padding: 0 10px;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.input};
  border: 1px solid ${({ theme }) => theme.color.line};
  outline: none;
  transition: all ease-in-out 250ms;

  &:disabled {
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.textLight};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.btnPrimaryFocus};
  }
`

const BtnAction = styled(ButtonClean)`
  padding: 0.25rem;
  position: absolute;
  bottom: 0.375rem;
  right: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
`

export interface Props {
  name?: string
  title?: string
  value?: string
  required?: boolean
  disabled?: boolean
  maxLength?: number
  autoFocus?: boolean
  placeholder?: string
  autoComplete?: string
  button?: {
    icon: IconType
    onClick: () => void
  } | null
  type: React.HTMLInputTypeAttribute
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => void
}

export default function Input({
  name,
  type,
  value,
  title,
  button,
  required,
  onChange,
  disabled,
  maxLength,
  autoFocus,
  placeholder,
  autoComplete,
}: Props) {
  const id = useId()
  return (
    <Container>
      {title && <Label htmlFor={id}>{title}</Label>}
      <Inp
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.currentTarget.value, e)}
      />
      {button && (
        <BtnAction type="button" onClick={button.onClick}>
          <Icon name={button.icon} size={22} />
        </BtnAction>
      )}
    </Container>
  )
}
