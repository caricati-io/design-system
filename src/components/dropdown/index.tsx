import { useState } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import ClickOutside from '../click-outside'
import Icon, { IconNames } from '../icon'

type XAxis = 'left' | 'right'

const Container = styled(ClickOutside)`
  position: relative;
  display: inline-block;
`

const Option = styled.div`
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
  box-sizing: border-box;

  &:not([aria-disabled='true']):hover {
    background-color: ${({ theme }) => theme.color.lineLight};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: default;
  }
`

const Box = styled.div<{
  xAxis: XAxis
  boxMaxWidth: string
  boxMinWidth: string
  triggerDistance: number
}>`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.box};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.625rem;
  position: absolute;
  top: 100%;
  animation: slideDown ease 300ms;
  transform: translateY(
    ${({ triggerDistance }) => `${triggerDistance / 16}rem`}
  );

  ${({ xAxis }) =>
    xAxis === 'left'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};

  ${({ boxMaxWidth, boxMinWidth }) => css`
    max-width: ${boxMaxWidth};
    min-width: ${boxMinWidth};
  `}

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(
        -${({ triggerDistance }) => `${triggerDistance / 16}rem`}
      );
    }
    to {
      opacity: 1;
      transform: translateY(
        ${({ triggerDistance }) => `${triggerDistance / 16}rem`}
      );
    }
  }
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
  xAxis?: XAxis
  maxWidth?: string
  minWidth?: string
  triggerDistance?: number
  isOpenByDefault?: boolean
  trigger(params: ActionParams): React.ReactElement
  items: {
    id: ID
    label: string
    icon?: IconNames
    disabled?: boolean
    onClick?: (params: ActionParams) => void
  }[]
}

export default function Dropdown({
  items,
  trigger,
  xAxis = 'right',
  maxWidth = 'auto',
  minWidth = '210px',
  triggerDistance = 8,
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
        <Box
          xAxis={xAxis}
          role="listbox"
          boxMaxWidth={maxWidth}
          boxMinWidth={minWidth}
          triggerDistance={triggerDistance}
        >
          {items?.map((item) => (
            <Option
              tabIndex={0}
              role="option"
              key={`${item.id}`}
              aria-selected={false}
              aria-disabled={item.disabled}
              onClick={() => item.onClick?.(actions)}
              onKeyDown={(event) =>
                keyActionClick(event, () => item.onClick?.(actions))
              }
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
