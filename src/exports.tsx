import styled, {
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components'

import Provider from './provider'
import Tabs from './components/tabs'
import Button from './components/button'
import Dropdown from './components/dropdown'
import * as KeyboardEvent from './keyboard-event'
import ClickOutside from './components/click-outside'
import Icon, { IconType } from './components/icon'

export type {
  IconType
}

export default {
  styled,
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,

  Icon,
  Tabs,
  Button,
  Dropdown,
  ClickOutside,
  KeyboardEvent,
  Provider,
}
