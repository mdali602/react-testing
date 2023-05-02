import { useCallback, useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      const userNames = users.map(({ name }: { name: string }) => name)
      setUsers(userNames)
    } catch (error) {
      setError('Error fetching userss')
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error} </p>}
      <ul>
        {users.map((user) => (
          <li key={user}> {user} </li>
        ))}
      </ul>
    </div>
  )
}
