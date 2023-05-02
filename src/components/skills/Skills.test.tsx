import { logRoles, render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('should renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('should renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('should renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.queryByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('should not render Start Learning button', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: /start learning/i,
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('should display start learning button eventually', async () => {
    const { container } = render(<Skills skills={skills} />)
    logRoles(container)
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: /start learning/i,
      },
      { timeout: 2000 }
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
