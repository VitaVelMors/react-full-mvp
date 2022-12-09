import React, { useState } from 'react';

import './App.css'
import AddScout from './components/AddScout';
import GetScout from './GetScout';

function App() {
  const [scoutName, setscoutName] = useState('')
  const [scoutAge, setScoutAge] = useState(0)
  const [scoutGender, setScoutGender] = useState('')
  const [allScouts, setAllScouts] = useState([])

  const scoutProps = {
    scoutName,
    setscoutName,
    scoutAge,
    setScoutAge,
    scoutGender, 
    setScoutGender,
    allScouts
  }

  return (
    <div className='app'>
      <AddScout {...scoutProps} />
      <GetScout {...scoutProps} />
    </div>

  )
}

export default App
