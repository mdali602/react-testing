import { logRoles, render, screen } from '@testing-library/react'
import { Users } from './Users'
import { server } from '../../mocks/server'
import { rest } from 'msw'

describe('Users', () => {
  test('should renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('should renders a list of users', async () => {
    const { container } = render(<Users />)
    logRoles(container)
    // screen.debug();
    const users = await screen.findAllByRole('listitem')
    // screen.debug();
    logRoles(container)

    expect(users).toHaveLength(3)
  })

  test('should renders error', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) =>
        res(ctx.status(500))
      )
    )

    render(<Users />)
    const errorElement = await screen.findByText(/error fetching users/i)
    expect(errorElement).toBeInTheDocument()
  })
})
