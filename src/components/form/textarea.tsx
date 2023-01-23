import React, { useId } from 'react'
import styled from 'styled-components'
import inputStyled from './input.styled'

const Container = styled.div`
  position: relative;
`

const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
  display: inline-block;
`

const Area = styled.textarea`
  ${inputStyled}
  min-height: 2.625rem;
  resize: vertical;
  padding: 0.625rem 1rem;
`

export interface Props {
  name?: string
  rows?: number
  label?: string
  value?: string
  required?: boolean
  disabled?: boolean
  maxLength?: number
  autoFocus?: boolean
  placeholder?: string
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement> | null
  ) => void
}

export default function Textarea({
  name,
  rows,
  value,
  label,
  required,
  onChange,
  disabled,
  maxLength,
  autoFocus,
  placeholder,
}: Props) {
  const id = useId()
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Area
        id={id}
        name={name}
        rows={rows}
        value={value}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.currentTarget.value, e)}
      />
    </Container>
  )
}
