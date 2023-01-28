import { useCallback, useContext } from 'react'
import toastContext from '../../components/toast/context'
import { randomId } from '../use-random-id'

export default function useToast() {
  const { add } = useContext(toastContext)

  const error = useCallback(
    (label: string) => add({ id: randomId(), label, type: 'ERROR' }),
    [add]
  )

  const success = useCallback(
    (label: string) => add({ id: randomId(), label, type: 'SUCCESS' }),
    [add]
  )

  const info = useCallback(
    (label: string) => add({ id: randomId(), label, type: 'INFO' }),
    [add]
  )

  const warning = useCallback(
    (label: string) => add({ id: randomId(), label, type: 'WARNING' }),
    [add]
  )

  return {
    info,
    error,
    success,
    warning,
  }
}
