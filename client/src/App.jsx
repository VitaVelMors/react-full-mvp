import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AddScout from './components/AddScout';
import GetScout from './components/GetScouts';


function App() {
  let ApiUrl = 'http://localhost:5000/scouts';
  const [scoutName, setScoutName] = useState('')
  const [scoutAge, setScoutAge] = useState('')
  const [scoutGender, setScoutGender] = useState('');
  const [allScouts, setAllScouts] = useState([]);
  const [scout, setScout] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  const contextData = {
    ApiUrl,
    scoutName, setScoutName,
    scoutAge, setScoutAge,
    scoutGender, setScoutGender,
    refreshData, setRefreshData,
    allScouts, setAllScouts,
    scout, setScout,
  }





  return (
    <listContextStates.Provider value={{ ...contextData }}>
      <div className="App">
        <AddScout />
        <br/>
        <GetScout />
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = React.createContext();
export default App
