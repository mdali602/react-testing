import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CounterTwo } from './CounterTwo'

describe('CounterTwo', () => {
  test('should render correctly', () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByRole('heading', {
      name: /counter two/i,
    })
    expect(headingElement).toBeInTheDocument()
  })

  test('should call handlers properly', async () => {
    const increamentHandler = jest.fn()
    const decreamentHandler = jest.fn()
    userEvent.setup()
    render(
      <CounterTwo
        count={0}
        handleIncreament={increamentHandler}
        handleDencreament={decreamentHandler}
      />
    )
    const increamentButton = screen.getByRole('button', {
      name: /increament/i,
    })
    const decreamentButton = screen.getByRole('button', {
      name: /decreament/i,
    })
    await userEvent.click(increamentButton)
    await userEvent.click(decreamentButton)

    expect(increamentHandler).toHaveBeenCalledTimes(1)
    expect(decreamentHandler).toHaveBeenCalledTimes(1)

    // const textElement = screen.getByText(/1/i)
  })
})
