import React from 'react'

const Children = ({ counter, decreaseCounter }) => {
  return (
    <div>
      <h2>I'm counting: {counter}</h2>
      <button onClick={decreaseCounter}>Decrease now!</button>
    </div>
  )
}

export default Children
