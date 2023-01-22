import React, { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import designSystemContext from '../../context'

interface Props {
  children: React.ReactNode
}

function Portal({ children }: Props) {
  const [mounted, setMounted] = useState(false)
  const { portalId } = useContext(designSystemContext)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.getElementById(portalId) as HTMLElement)
    : null
}

export default Portal
