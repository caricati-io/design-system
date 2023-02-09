import styled, {
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components'

import Install from './install'
import * as keyboardEvent from './keyboard-event'

import Tabs from './components/tabs'
import Photo from './components/photo'
import Badge from './components/badge'
import Modal from './components/modal'
import Panel from './components/panel'
import Button from './components/button'
import Tooltip from './components/tooltip'
import Dropdown from './components/dropdown'
import Accordion from './components/accordion'
import ModalBody from './components/modal/body'
import ModalFooter from './components/modal/footer'
import ModalHeader from './components/modal/header'
import ButtonGroup from './components/button-group'
import PanelBody from './components/panel/body'
import PanelHeader from './components/panel/header'
import AccordionItem from './components/accordion/item'
import Icon, { IconNames } from './components/icon'

// forms
import Radio from './components/form/radio'
import FormRow from './components/form/row'
import Select from './components/form/select'
import Toggle from './components/form/toggle'
import Textarea from './components/form/textarea'
import InputText from './components/form/input-text'
import InputEmail from './components/form/input-email'
import InputSearch from './components/form/input-search'
import InputPassword from './components/form/input-password'

export type { IconNames }

const lib = {
  styled,
  useTheme,
  ServerStyleSheet,
  StyleSheetManager,
  keyboardEvent,
  InstallRui: Install,

  // Components init
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
  Tooltip,
  Photo,
  Tabs,
  Panel,
  PanelBody,
  PanelHeader,

  // Forms
  InputText,
  InputEmail,
  InputPassword,
  InputSearch,
  Radio,
  FormRow,
  Select,
  Textarea,
  Toggle,
}

export default lib
