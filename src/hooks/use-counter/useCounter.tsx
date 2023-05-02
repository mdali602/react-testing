import { useState } from 'react'
import { UseCounterProps } from './useCounter.types'

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increament = () => setCount((prevCount) => prevCount + 1)
  const decreament = () => setCount((prevCount) => prevCount - 1)
  return { count, increament, decreament }
}
