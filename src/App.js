import React from 'react'
import './App.css';

import Checkboxes from './hooks/what-a-mess/checkboxes'

function App() {
  const [checks, setChecks] = React.useState()

  const options = {
    male: 'Male',
    female: 'Female',
    pizza: 'Pizza',
    cat: 'Cat',
    all: 'All of the above'
  }

  function handleOptionsChange (options) {
    console.log(options)
    setChecks(options)
  }

  return (
    <>
      <h2>Gender</h2>
      <Checkboxes onChange={handleOptionsChange} options={options} />
    </>
  );
}

export default App;
