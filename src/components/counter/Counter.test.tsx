import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('should render correctly', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const increamentButton = screen.getByRole('button', {
      name: /increament/i,
    })
    expect(increamentButton).toBeInTheDocument()
  })

  test('should renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('should renders a count of 1 after clicking the increament button', async () => {
    userEvent.setup()
    render(<Counter />)
    const increamentButton = screen.getByRole('button', {
      name: /increament/i,
    })
    await userEvent.click(increamentButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('should renders a count of 2 after clicking the increament button twice', async () => {
    userEvent.setup()
    render(<Counter />)
    const increamentButton = screen.getByRole('button', {
      name: /increament/i,
    })
    await userEvent.click(increamentButton)
    await userEvent.click(increamentButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  test('should renders a count of 10 after clicking the set button', async () => {
    userEvent.setup()
    render(<Counter />)
    const amounInput = screen.getByRole('spinbutton')
    await userEvent.type(amounInput, '10')
    expect(amounInput).toHaveValue(10)

    const setButton = screen.getByRole('button', { name: /set/i })
    await userEvent.click(setButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    userEvent.setup()
    render(<Counter />)
    const amounInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: /set/i })
    const increamentButton = screen.getByRole('button', {
      name: /increament/i,
    })
    await userEvent.tab()
    expect(increamentButton).toHaveFocus()
    await userEvent.tab()
    expect(amounInput).toHaveFocus()
    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})
