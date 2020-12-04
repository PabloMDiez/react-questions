import React from 'react'

const useInputList = (initialState = {}) => {
  const [values, setValues] = React.useState(initialState)

  function onChange (event) {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  return {
    onChange,
    values,
  }
}

const useCheckbox = (initialState = false) => {
  const [values, setValues] = React.useState(initialState)

  function onChange (event) {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.checked
    }))
  }

  return {
    onChange,
    values,
  }
}


const InputsCustomHooksExtraAlt = () => {
  const inputs = useInputList({
    firstName: '',
    lastName: '',
    city: '',
    gender: '',
  })
  const checks = useCheckbox({
    awesome: false,
    fast: false,
    queer: true,
  })

  return (
    <div>
      <h2>The basics</h2>
      <label>
        First name:
        <input
          name='firstName'
          onChange={inputs.onChange}
          value={inputs.values['firstName']}
        />
        {inputs.values['firstName']}
      </label>
      <br/>
      <label>
        Last name:
        <input
          name='lastName'
          onChange={inputs.onChange}
          value={inputs.values['lastName']}
        />
        {inputs.values['lastName']}
      </label>
      <br/>
      <label>
        City:
        <input
          name='city'
          onChange={inputs.onChange}
          value={inputs.values['city']}
        />
        {inputs.values['city']}
      </label>
      <div onChange={inputs.onChange}>
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
        Oh, so you're {inputs.values['gender']}?
      </div>
      <div>
        <h2>
          Checkboxes
        </h2>
        <label>
          <input
            name='awesome'
            checked={checks.values['awesome']}
            onChange={checks.onChange}
            type='checkbox'
          />
          I feel awesome
        </label>
        <label>
          <input
            name='fast'
            checked={checks.values['fast']}
            onChange={checks.onChange}
            type='checkbox'
          />
          I write very fast
        </label>
        <label>
          <input
            name='queer'
            checked={checks.values['queer']}
            onChange={checks.onChange}
            type='checkbox'
          />
          I feel quite queer today
        </label>
        <br />
        Does this one feel queer today?
        {checks.values['queer'] ? 'YAS' : 'Nah'}
      </div>
    </div>
  )
}

export default InputsCustomHooksExtraAlt
