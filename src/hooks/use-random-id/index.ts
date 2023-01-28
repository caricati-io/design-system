import { useCallback } from 'react'

export function randomId() {
  return Math.random().toString(36).substring(2)
}

export default function useRandomId() {
  return useCallback(randomId, [])
}
