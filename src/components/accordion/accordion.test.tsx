import { render, screen, fireEvent, userEvent } from '../../testing'

import Accordion from '.'
import AccordionItem from './item'
import { AccordionProvider } from './context'

describe('<Accordion />', () => {
  test('renders a button correctly', () => {
    render(
      <Accordion>
        <AccordionItem title="Title 1">item 1</AccordionItem>
        <AccordionItem title="Title 2">item 2</AccordionItem>
        <AccordionItem title="Title 3">item 3</AccordionItem>
      </Accordion>
    )
    const item1 = screen.getByText(/item 1/i)
    const item2 = screen.getByText(/item 2/i)
    const item3 = screen.getByText(/item 3/i)

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
    expect(item3).toBeInTheDocument()
  })

  test('should opens the accordion when it is clicked', async () => {
    const {container, getByText } = render(
      <Accordion>
        <AccordionItem title="Title 1">item 1</AccordionItem>
        <AccordionItem title="Title 2">item 2</AccordionItem>
        <AccordionItem title="Title 3">item 3</AccordionItem>
      </Accordion>
    )

    ;(() => {
      const elements = container.querySelectorAll('[role=region]')

      expect(elements[0]).toHaveAttribute('aria-hidden', 'true')
      expect(elements[1]).toHaveAttribute('aria-hidden', 'true')
      expect(elements[2]).toHaveAttribute('aria-hidden', 'true')
    })()

    fireEvent.click(getByText('Title 2'))

    ;(() => {
      const elements = container.querySelectorAll('[role=region]')

      expect(elements[0]).toHaveAttribute('aria-hidden', 'true')
      expect(elements[1]).toHaveAttribute('aria-hidden', 'false')
      expect(elements[2]).toHaveAttribute('aria-hidden', 'true')
    })()
  })

  test('should opens only one accordion at a time', () => {
    const { container } = render(
      <Accordion openOnlyOne>
        <AccordionItem title="Title 1">item 1</AccordionItem>
        <AccordionItem title="Title 2">item 2</AccordionItem>
        <AccordionItem title="Title 3">item 3</AccordionItem>
      </Accordion>
    )

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'true')
      expect(region[2]).toHaveAttribute('aria-hidden', 'true')
    })()

    fireEvent.click(screen.getByText('Title 2'))

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'false')
      expect(region[2]).toHaveAttribute('aria-hidden', 'true')
    })()

    fireEvent.click(screen.getByText('Title 3'))

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'true')
      expect(region[2]).toHaveAttribute('aria-hidden', 'false')
    })()
  })

  test('should opens many accordions when is clicked', () => {
    const { container } = render(
      <Accordion openOnlyOne={false}>
        <AccordionItem title="Title 1">item 1</AccordionItem>
        <AccordionItem title="Title 2">item 2</AccordionItem>
        <AccordionItem title="Title 3">item 3</AccordionItem>
      </Accordion>
    )

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'true')
      expect(region[2]).toHaveAttribute('aria-hidden', 'true')
    })()

    fireEvent.click(screen.getByText('Title 2'))

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'false')
      expect(region[2]).toHaveAttribute('aria-hidden', 'true')
    })()

    fireEvent.click(screen.getByText('Title 3'))

    ;(() => {
      const region = container.querySelectorAll('[role=region]')

      expect(region[0]).toHaveAttribute('aria-hidden', 'true')
      expect(region[1]).toHaveAttribute('aria-hidden', 'false')
      expect(region[2]).toHaveAttribute('aria-hidden', 'false')
    })()
  })

  test.skip('should opens an accordion when the keyboard is preesed to open', async () => {
    // const { container, getByText } = render(
    //   <Accordion openOnlyOne={false}>
    //     <AccordionItem title="Title 1">item 1</AccordionItem>
    //     <AccordionItem title="Title 2">item 2</AccordionItem>
    //     <AccordionItem title="Title 3">item 3</AccordionItem>
    //   </Accordion>
    // )

    // const region = container.querySelectorAll('[role=region]')

    // expect(region[0]).toHaveAttribute('aria-hidden', 'true')
    // expect(region[1]).toHaveAttribute('aria-hidden', 'true')
    // expect(region[2]).toHaveAttribute('aria-hidden', 'true')

    // fireEvent.focus(getByText('Title 2'))
    // await userEvent.keyboard('{enter}')
    // // fireEvent.keyPress(region[1], { key: 'Enter', "code": 13, charCode: 13 })

    // ;(() => {
    //   const regions = container.querySelectorAll('[role=region]')

    //   expect(regions[0]).toHaveAttribute('aria-hidden', 'true')
    //   expect(regions[1]).toHaveAttribute('aria-hidden', 'false')
    //   expect(regions[2]).toHaveAttribute('aria-hidden', 'true')
    // })()
  })

  test('should checks the properties of the context', async () => {
    render(
      <AccordionProvider value={{ handleToggle: () => null, openIds: [] }}>
        <AccordionItem title="Title 1">item 1</AccordionItem>
        <AccordionItem title="Title 2">item 2</AccordionItem>
        <AccordionItem title="Title 3">item 3</AccordionItem>
      </AccordionProvider>
    )
  })


})
