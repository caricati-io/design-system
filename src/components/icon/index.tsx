import styled from 'styled-components'

import BellFilledSvg from './svg/bell-filled'
import BellSvg from './svg/bell'
import CaretDownSvg from './svg/caret-down'
import CaretLeftSvg from './svg/caret-left'
import CaretRightSvg from './svg/caret-right'
import CaretUpSvg from './svg/caret-up'
import ChatSvg from './svg/chat'
import checkSvg from './svg/check'
import chevronDownSvg from './svg/chevron-down'
import chevronLeftSvg from './svg/chevron-left'
import chevronRightSvg from './svg/chevron-right'
import chevronUpSvg from './svg/chevron-up'
import EyeHideSvg from './svg/eye-hide'
import EyeSvg from './svg/eye'
import FilterSvg from './svg/filter'
import GridDotsSvg from './svg/grid-dots'
import ImportantSvg from './svg/important'
import KeySvg from './svg/key'
import ListSvg from './svg/list'
import MailSvg from './svg/mail'
import MoreHorizontalSvg from './svg/more-horizontal'
import MoreVerticalSvg from './svg/more-vertical'
import plusSvg from './svg/plus'
import SearchSvg from './svg/search'
import timesSvg from './svg/times'
import TrashSvg from './svg/trash'
import boardFilledSvg from './svg/board-filled'
import boardSvg from './svg/board'
import playersSvg from './svg/player'
import playersFilledSvg from './svg/player-filled'
import settingsSvg from './svg/settings'
import settingsFilledSvg from './svg/settings-filled'
import logoutSvg from './svg/logout'
import logoutFilledSvg from './svg/logout-filled'

const iconsMap = {
  'caret-down': { default: CaretDownSvg },
  'caret-left': { default: CaretLeftSvg },
  'caret-right': { default: CaretRightSvg },
  'caret-up': { default: CaretUpSvg },
  'chevron-down': { default: chevronDownSvg },
  'chevron-left': { default: chevronLeftSvg },
  'chevron-right': { default: chevronRightSvg },
  'chevron-up': { default: chevronUpSvg },
  'eye-hide': { default: EyeHideSvg },
  'grid-dots': { default: GridDotsSvg },
  'more-horizontal': { default: MoreHorizontalSvg },
  'more-vertical': { default: MoreVerticalSvg },

  bell: { default: BellSvg, fill: BellFilledSvg },
  board: { default: boardSvg, fill: boardFilledSvg },
  players: { default: playersSvg, fill: playersFilledSvg },
  settings: { default: settingsSvg, fill: settingsFilledSvg },
  logout: { default: logoutSvg, fill: logoutFilledSvg },
  chat: { default: ChatSvg },
  check: { default: checkSvg },
  eye: { default: EyeSvg },
  filter: { default: FilterSvg },
  important: { default: ImportantSvg },
  key: { default: KeySvg },
  list: { default: ListSvg },
  mail: { default: MailSvg },
  plus: { default: plusSvg },
  search: { default: SearchSvg },
  times: { default: timesSvg },
  trash: { default: TrashSvg },
}

type IconMapElement = { default: JSX.Element; fill?: JSX.Element }

const Container = styled.div<{ iconSize: string }>`
  display: inline-block;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};

  svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    float: left;
  }
`

export type TypeofIconMap = typeof iconsMap

export const iconOptions = Object.keys(iconsMap).sort((a, b) =>
  a > b ? 1 : -1
)

export type IconNames = keyof TypeofIconMap

export interface Props {
  size?: number
  title?: string
  className?: string
  fill?: boolean
  name: IconNames
}

export default function Icon({
  name,
  title,
  size = 16,
  className,
  fill = false,
}: Props): React.ReactElement | null {
  const iconObject: IconMapElement = iconsMap[name]

  if (!iconObject) {
    return null
  }

  const icon = (fill && iconObject?.fill) || iconObject.default

  return (
    <Container title={title} className={className} iconSize={`${size / 16}rem`}>
      {icon}
    </Container>
  )
}
