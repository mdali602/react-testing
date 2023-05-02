import React from 'react'
import { GreetProps } from './Greet.types'

const Greet = (props: GreetProps) => {
  const { name } = props
  return <div>Hello {name ? name : 'Guest'} </div>
}

export default Greet
