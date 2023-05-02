import { CounterTwoProps } from './CounterTwo.types'

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p> {props.count} </p>
      {props.handleIncreament && (
        <button onClick={props.handleIncreament}>Increament</button>
      )}
      {props.handleDencreament && (
        <button onClick={props.handleDencreament}>Decreament</button>
      )}
    </div>
  )
}
