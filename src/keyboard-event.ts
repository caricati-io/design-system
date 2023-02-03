import react from 'react'

type Callback = (() => void) | undefined
export type KeyboardEvt = react.KeyboardEvent<HTMLElement> | KeyboardEvent

const enterReg = /^Enter$|^NumpadEnter$/

export const keySpace = (e: KeyboardEvt, callback: Callback): void => {
  if (e.code === 'Space' && typeof callback === 'function') callback()
}

export const keyEnter = (e: KeyboardEvt, callback: Callback): void => {
  if (enterReg.test(e.code) && typeof callback === 'function') callback()
}

export const keyEsc = (e: KeyboardEvt, callback: Callback): void => {
  if (e.code === 'Escape' && typeof callback === 'function') callback()
}

export const keyActionClick = (e: KeyboardEvt, callback: Callback): void => {
  if (/Enter|Space/.test(e.code) && typeof callback === 'function') callback()
}

export const keyCtrlEnter = (e: KeyboardEvt, callback: Callback): void => {
  const pressCtrl = e.metaKey || e.ctrlKey
  if (enterReg.test(e.code) && pressCtrl && typeof callback === 'function') {
    callback()
  }
}
