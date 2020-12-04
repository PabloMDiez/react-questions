import React from 'react'

const useInput = (initialState = '') => {
  const [value, setValue] = React.useState(initialState)

  function handleInputChange(event) {
    setValue(event.target.value)
  }

  return [value, handleInputChange]
}

const InputsCustomHooks = () => {
  const [firstName, handleFirstNameChange] = useInput()
  const [lastName, handleLastNameChange] = useInput()
  const [city, handleCityChange] = useInput()

  return (
    <div>
      <label>
        First name:
        <input onChange={handleFirstNameChange} value={firstName}/>
        {firstName}
      </label>
      <br/>
      <label>
        Last name:
        <input onChange={handleLastNameChange} value={lastName}/>
        {lastName}
      </label>
      <br/>
      <label>
        City:
        <input onChange={handleCityChange} value={city}/>
        {city}
      </label>
    </div>
  )
}

export default InputsCustomHooks
