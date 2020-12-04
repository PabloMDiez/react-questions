import React from 'react'

const useInput = (initialState = '') => {
  const [value, setValue] = React.useState(initialState)

  function onChange (event) {
    setValue(event.target.value)
  }

  return {
    onChange,
    value,
  }
}

const useCheckbox = (initialState = false) => {
  const [checked, setValue] = React.useState(initialState)

  function onChange (event) {
    setValue(event.target.checked)
  }

  return {
    onChange,
    checked,
  }
}


const InputsCustomHooksAlt = () => {
  const firstName = useInput()
  const lastName = useInput()
  const city = useInput()
  const gender = useInput()
  const queer = useCheckbox(true)

  return (
    <div>
      <h2>The basics</h2>
      <label>
        First name:
        <input
          // Not spreading hook's content
          onChange={firstName.onChange}
          value={firstName.value}
        />
        {firstName.value}
      </label>
      <br/>
      <label>
        Last name:
        <input
          // Spreading hook's content
          {...lastName}
        />
        {lastName.value}
      </label>
      <br/>
      <label>
        City:
        <input
          {...city}
        />
        {city.value}
      </label>
      <div {...gender}>
        <h2>Gender</h2>
        <label>
          <input id='1' name='gender' type='radio' value='Male'/>
          Male
        </label>
        <label>
          <input id='2' name='gender' type='radio' value='Female'/>
          Female
        </label>
        <label>
          <input id='3' name='gender' type='radio' value='Pizza'/>
          Pizza
        </label>
        <label>
          <input id='4' name='gender' type='radio' value='All of the above'/>
          All of the above
        </label>
        <br />
        Oh, so you're {gender.value}?
      </div>
      <div>
        <h2>
          Checkboxes
        </h2>
        <label>
          <input type='checkbox' />
          I feel awesome
        </label>
        <label>
          <input type='checkbox' />
          I write very fast
        </label>
        <label>
          <input type='checkbox' {...queer} />
          I feel quite queer today
        </label>
        <br />
        Does this one feel queer today?
        {queer.checked ? 'YAS' : 'Nah'}
      </div>
    </div>
  )
}

export default InputsCustomHooksAlt
