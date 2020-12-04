import React from 'react'

const Inputs = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
    setLastName(event.target.value)
  }

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
    </div>
  )
}

export default Inputs
