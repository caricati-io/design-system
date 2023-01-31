import React, {
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface Props {
  className?: string
  children: React.ReactNode
  onOutside: (e: MouseEvent) => void
}

export function useForwardedRef<T>(
  ref: React.RefObject<T>,
  forwardedRef: React.ForwardedRef<T>
): void {
  useImperativeHandle<T | null, T | null>(forwardedRef, () => ref.current)
}

function ClickOutsideForward(
  { children, onOutside, className }: Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
): React.ReactElement {
  const innerRef = useRef<HTMLDivElement>(null)

  useForwardedRef<HTMLDivElement>(innerRef, forwardedRef)

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!innerRef.current) {
        return
      }
      if (innerRef && !innerRef.current?.contains(event.target as Node)) {
        onOutside(event)
      }
    },
    [onOutside, innerRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    return () => document.removeEventListener('mousedown', handleClick, false)
  }, [handleClick])

  return (
    <Wrapper className={className} ref={innerRef}>
      {children}
    </Wrapper>
  )
}

const ClickOutside = React.forwardRef<HTMLDivElement, Props>(
  ClickOutsideForward
)

export default ClickOutside
