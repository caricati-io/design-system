import { useState } from 'react'
import styled, { css } from 'styled-components'
import ButtonClean from '../button/clean'
import ClickOutside from '../click-outside'
import Icon, { IconType } from '../icon'

const Container = styled(ClickOutside)`
  position: relative;
`

const Option = styled(ButtonClean)`
  width: 100%;
  height: 40px;
  display: block;
  border-radius: 8px;
  text-align: left;
  transition: ease background-color 250ms;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.color.lineLight};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

const Box = styled.div<{ boxMaxWidth: string; boxMinWidth: string }>`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.box};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.625rem;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(0.625rem);

  ${({ boxMaxWidth, boxMinWidth }) => css`
    max-width: ${boxMaxWidth};
    min-width: ${boxMinWidth};
  `}
`

const OptionIcon = styled(Icon)`
  margin-right: 0.625rem;
`

type ID = string | number

interface ActionParams {
  isOpen: boolean
  toggle: () => void
  handleOpen: () => void
  handleClose: () => void
}

export interface Props {
  items: {
    id: ID
    label: string
    icon?: IconType
    disabled?: boolean
    onClick?: (params: ActionParams) => null
  }[]
  maxWidth?: string
  minWidth?: string
  isOpenByDefault?: boolean
  trigger(params: ActionParams): React.ReactElement
}

export default function Dropdown({
  items,
  trigger,
  maxWidth = '240px',
  minWidth = '220px',
  isOpenByDefault = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)
  const toggle = () => setIsOpen(!isOpen)

  const actions = { isOpen, handleClose, handleOpen, toggle }

  return (
    <Container onOutside={handleClose}>
      {trigger(actions)}
      {isOpen && (
        <Box boxMaxWidth={maxWidth} boxMinWidth={minWidth}>
          {items?.map((item) => (
            <Option
              type="button"
              key={`${item.id}`}
              disabled={item.disabled}
              onClick={() => item.onClick?.(actions)}
            >
              {item.icon && <OptionIcon name={item.icon} />}
              {item.label}
            </Option>
          ))}
        </Box>
      )}
    </Container>
  )
}
