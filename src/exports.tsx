import styled, {
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components'

import Provider from './provider'
import Tabs from './components/tabs'
import Button from './components/button'
import Dropdown from './components/dropdown'
import * as keyboardEvent from './keyboard-event'
import ClickOutside from './components/click-outside'
import Icon, { IconType } from './components/icon'
import Accordion from './components/accordion'
import AccordionItem from './components/accordion/item'
import Badge from './components/badge'
import ButtonGroup from './components/button-group'
import Modal from './components/modal'
import ModalBody from './components/modal/body'
import ModalFooter from './components/modal/footer'
import ModalHeader from './components/modal/header'
import Photo from './components/photo'

export type {
  IconType
}

const lib = {
  styled,
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,

  Accordion,
  AccordionItem,
  Badge,
  Button,
  ButtonGroup,
  Dropdown,
  Icon,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Photo,
  Tabs,
  ClickOutside,
  keyboardEvent,
  Provider,
}

export default lib
