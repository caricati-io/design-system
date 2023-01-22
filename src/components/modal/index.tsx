import { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { keyEsc } from '../../keyboard-event'
import { ModalProvider } from './context'

const Overlay = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  overflow: auto;
`

const Box = styled.div<{ boxWidth: number }>`
  width: 100%;
  max-width: ${({ boxWidth }) => `${boxWidth / 16}rem`};
  margin: 2rem auto 2rem;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 0.625rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 1rem 0 rgba(0, 0, 0, 0.25);
`

export interface Props {
  width?: number
  onClose?: () => void
  children: React.ReactNode
}

export default function Modal({ width = 400, children, onClose }: Props) {
  const onCloseMemo = useMemo(() => onClose, [onClose])

  useEffect(() => {
    if (onCloseMemo) {
      const handleEsc = (event: any) => keyEsc(event, onCloseMemo)
      window.addEventListener('keydown', handleEsc)
      return () => {
        window.removeEventListener('keydown', handleEsc)
      }
    }
    return () => null
  }, [onCloseMemo])

  return (
    <Overlay>
      <ModalProvider value={{ handleClose: onCloseMemo }}>
        <Box boxWidth={width}>{children}</Box>
      </ModalProvider>
    </Overlay>
  )
}
