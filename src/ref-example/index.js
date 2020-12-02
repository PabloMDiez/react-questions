import React from 'react'

const RefExample = () => {
  const inputRef = React.useRef()

  function handleButtonClick() {
    inputRef.current?.focus()
  }

  return (
    <div>
      <h1>Ref example</h1>
      <label>
        This is an input:
        <input ref={inputRef} />
      </label>
      <br /> <br />
      <button onClick={handleButtonClick}>Focus da inpaaatt</button>
    </div>
  )
}

export default RefExample
