// import { render, renderHook } from "../../test-utils"

import { act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initital count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })

  test('should increament the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increament())
    expect(result.current.count).toBe(1)
  })

  test('should decreament the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decreament())
    expect(result.current.count).toBe(-1)
  })
})
