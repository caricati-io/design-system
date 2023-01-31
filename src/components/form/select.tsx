import { useId, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import ClickOutside from '../click-outside'
import Icon from '../icon'
import Scroller from '../scroller'
import inputStyled, { inputDisableStyled } from './input.styled'

const Container = styled.div`
  position: relative;
`

const Label = styled.div`
  font-size: 0.875rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0.25rem;
  font-weight: 500;
  display: inline-block;
  cursor: default;
`

const OptionBox = styled.div<{ isVisible: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.box};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.625rem;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.2);
  animation: slideDown ease 300ms;
  transform: translateY(0.5rem);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0.5rem);
    }
  }
`

const Value = styled.div<{ isPlaceholder: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isPlaceholder, theme }) =>
    isPlaceholder &&
    css`
      color: ${theme.color.placeholder};
    `}
`

const OptionItem = styled.div`
  width: 100%;
  display: block;
  border-radius: 8px;
  text-align: left;
  transition: ease background-color 250ms;
  padding: 8px 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  word-break: break-all;

  &[aria-selected='true'] {
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:not([aria-selected='true']):hover {
    background-color: ${({ theme }) => theme.color.lineLight};
  }
`

const InputFake = styled.div`
  height: 42px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  cursor: pointer;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  ${inputStyled}

  &[aria-disabled='true'] {
    ${inputDisableStyled}
  }
`

interface Option {
  value: string
  label: string
}

export interface Props {
  label?: string
  value?: string
  disabled?: boolean
  placeholder?: string
  options?: Option[] | null
  onChange?: (value: string, option: Option) => void
}

export default function Select({
  label,
  value,
  options,
  disabled,
  placeholder,
  onChange,
}: Props) {
  const labelId = useId()
  const controls = useId()
  const listbox = useId()
  const controlsRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    if (!disabled) setIsOpen(!isOpen)
  }

  const selected = options?.find((item) => item.value === value)
  const handleChange = (option: Option) => {
    onChange?.(option.value, option)
    setIsOpen(false)
  }

  return (
    <Container>
      {label && (
        <Label
          id={labelId}
          role="button"
          tabIndex={-1}
          aria-labelledby={controls}
          onClick={() => controlsRef.current?.focus()}
          onKeyDown={(event) =>
            keyActionClick(event, () => controlsRef.current?.focus())
          }
        >
          {label}
        </Label>
      )}
      <ClickOutside onOutside={() => setIsOpen(false)}>
        <InputFake
          role="combobox"
          id={controls}
          tabIndex={0}
          ref={controlsRef}
          aria-controls={listbox}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-disabled={disabled}
          aria-activedescendant={selected ? `${listbox}_${selected.value}` : ''}
          onClick={toggle}
          onKeyDown={(event) => keyActionClick(event, toggle)}
        >
          <Value isPlaceholder={!!(!selected?.label && placeholder)}>
            {selected?.label || placeholder}
          </Value>
          <Icon name="chevron-down" size={20} />
        </InputFake>
        {isOpen && (
          <OptionBox
            role="listbox"
            id={listbox}
            tabIndex={-1}
            isVisible={isOpen}
            aria-labelledby={labelId}
          >
            <Scroller maxHeight="140px">
              {options?.length === 0 && <p>No items found.</p>}
              {options?.map((option) => (
                <OptionItem
                  role="option"
                  tabIndex={0}
                  key={option.value}
                  id={`${listbox}_${option.value}`}
                  onClick={() => handleChange(option)}
                  aria-selected={!!value && value === option.value}
                  onKeyDown={(event) =>
                    keyActionClick(event, () => handleChange(option))
                  }
                >
                  {option.label}
                </OptionItem>
              ))}
            </Scroller>
          </OptionBox>
        )}
      </ClickOutside>
    </Container>
  )
}
