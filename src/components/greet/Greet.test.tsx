import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  test('renders a name', () => {
    render(<Greet name="Ali" />)
    const textElement = screen.getByText(/hello Ali/i)
    expect(textElement).toBeInTheDocument()
  })
})
