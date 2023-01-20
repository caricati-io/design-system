import React, { useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface Props {
  className?: string
  children: React.ReactNode
  onOutside: (e: MouseEvent) => void
}

function ClickOutsideForward({ children, onOutside, className }: Props, ref: any): React.ReactElement {
  const currentRef = useRef<HTMLDivElement>(null)
  const innerRef = ref || currentRef

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

const ClickOutside = React.forwardRef(ClickOutsideForward)

export default ClickOutside
