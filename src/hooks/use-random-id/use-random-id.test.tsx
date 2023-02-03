import { useState } from 'react'
import { fireEvent, render } from '../../testing'

import useRandomId from '.'

function Demo() {
  const [str, setStr] = useState('')
  const rand = useRandomId()
  return (
    <div>
      <button data-testid="btn" type="button" onClick={() => setStr(rand())}>
        random
      </button>
      <p data-testid="context">{str}</p>
    </div>
  )
}

describe('useRandomId', () => {
  test('renders a Tabs correctly', () => {
    const { getByTestId } = render(<Demo />)
    expect(getByTestId('context')).toBeEmptyDOMElement()
    
    fireEvent.click(getByTestId('btn'))
    const firstRand = getByTestId('context').textContent
    expect(firstRand?.length).toBeGreaterThan(9)
    
    fireEvent.click(getByTestId('btn'))
    const secondRand = getByTestId('context').textContent
    expect(secondRand?.length).toBeGreaterThan(9)

    expect(firstRand === secondRand).toBeFalsy()
  })
})
