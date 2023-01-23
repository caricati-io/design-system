import React, { useId } from 'react'
import styled from 'styled-components'
import ButtonClean from '../button/clean'
import Icon, { IconType } from '../icon'
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

const Inp = styled.input<{ hasLeftGap: boolean; hasRightGap: boolean }>`
  height: 42px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${({ hasLeftGap }) => {
    if (hasLeftGap) return '3rem'
    return '1rem'
  }};
  padding-right: ${({ hasRightGap }) => {
    if (hasRightGap) return '3rem'
    return '1rem'
  }};
  ${inputStyled}
`

const LeftIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.inputTextDisabled};
  position: absolute;
  bottom: 10px;
  left: 1rem;
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
  label?: string
  value?: string
  required?: boolean
  disabled?: boolean
  maxLength?: number
  autoFocus?: boolean
  placeholder?: string
  autoComplete?: string
  leftIcon?: IconType | null
  type: React.HTMLInputTypeAttribute
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => void
}

interface RestrictProps {
  button?: {
    icon: IconType
    onClick: () => void
  } | null
}

export default function Input({
  name,
  type,
  value,
  label,
  button,
  leftIcon,
  required,
  onChange,
  disabled,
  maxLength,
  autoFocus,
  placeholder,
  autoComplete,
}: Props & RestrictProps) {
  const id = useId()
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      {leftIcon && <LeftIcon name={leftIcon} size={22} />}
      <Inp
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        hasRightGap={!!button}
        hasLeftGap={!!leftIcon}
        placeholder={placeholder}
        autoComplete={autoComplete}
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
