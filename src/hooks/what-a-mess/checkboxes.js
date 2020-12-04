import React from 'react'
import './checkboxes.css'

const Checkboxes = ({ onChange, options }) => {
  const [checks, setChecks] = React.useState({})

  function handleInputChange (name, event) {
    setChecks(checks => {
      const newValues = ({
        ...checks,
        [name]: event.target.checked,
      })

      onChange(newValues)

      return newValues
    })
  }

  return (
    <div>
      {Object.entries(options).map(([key, text]) => (
        <label key={key}>
          <input
            checked={checks[key] || false}
            onChange={event => handleInputChange(key, event)}
            type='checkbox'
          />
          {text}
        </label>
      ))}
    </div>
  )
}

export default Checkboxes
