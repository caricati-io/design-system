import { useContext } from 'react'
import styled from 'styled-components'

import Portal from '../portal'
import { keyActionClick } from '../../keyboard-event'
import toastContext, { ToastVariant } from './context'

const List = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  padding: 1.5rem 1.5rem 0;
  overflow: hidden;
  z-index: 505;
`
const Item = styled.div<{ variant?: ToastVariant; toastDuration: number }>`
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.toast};
  animation: slideIn 250ms ease,
    slideOut 600ms ease-in ${({ toastDuration }) => toastDuration - 250}ms;

  background-color: ${({ theme, variant }) => {
    if (variant === 'ERROR') {
      return theme.color.red
    }
    if (variant === 'SUCCESS') {
      return theme.color.green
    }
    if (variant === 'INFO') {
      return theme.color.blue
    }
    if (variant === 'WARNING') {
      return theme.color.orange
    }
    return theme.color.input
  }};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    45% {
      transform: translateX(-1rem);
      opacity: 1;
    }
    50% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`

export default function ToastContainer() {
  const { items, remove, duration } = useContext(toastContext)

  const rm = (id: string) => remove(id)

  if (items.length > 0) {
    return (
      <Portal>
        <List>
          {items.map((item) => (
            <Item
              role="button"
              tabIndex={-1}
              key={item.id}
              variant={item.variant}
              id={`toast_${item.id}`}
              toastDuration={duration}
              onClick={() => rm(item.id)}
              onKeyDown={(event) => keyActionClick(event, () => rm(item.id))}
            >
              {item.label}
            </Item>
          ))}
        </List>
      </Portal>
    )
  }
  return null
}
