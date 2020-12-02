import React from 'react'
import Children from './children'

const Parent = () => {
  const [ counter, setCounter ] = React.useState(0)

  function handleButtonClick () {
    setCounter(counter => counter + 1)
  }

  function decreaseCounter () {
    setCounter(counter => counter - 1)
  }

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleButtonClick}>Count!</button>
      <Children counter={counter} decreaseCounter={decreaseCounter} />
    </div>
  )
}

export default Parent
