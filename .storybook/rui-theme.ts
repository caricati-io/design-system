import { create } from '@storybook/theming'
import theme from '../src/theme'

export default create({
  base: 'dark',
  brandTitle: 'RUI - React User Interface',
  brandUrl: 'https://caricati-ds.netlify.app/',
  brandImage: 'https://github.com/caricati-io/rui/raw/main/.github/logo-dark.svg',
  brandTarget: '_self',
  appBg: theme.color.box,
  appContentBg: theme.color.box,
  barBg: theme.color.box,
  colorPrimary: theme.color.primary,
  appBorderColor: theme.color.line,
})
