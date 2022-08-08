
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [backendData, setBackendData] = useState({}) 

  useEffect(() => {
    (async () => {
      const response = await fetch("api")
      const data = await response.json()
      setBackendData(data)
    })()
    
  },[])

  const {
    name,
    townHallLevel,
    trophies,
    bestTrophies,
    builderHallLevel,
    leagueName,
    mediumIcon,
    previousTrophies,
    bestSeasonTrophies,
    currentTrophies
  } = backendData;

  return (
    <div className="App">
    {(typeof backendData.name === "undefined") ? (
      <p>...loading</p>
    ) : (
      <p>{name} {townHallLevel} {trophies} {bestTrophies} {builderHallLevel} {leagueName} {mediumIcon} {previousTrophies} {bestSeasonTrophies} {currentTrophies}</p>
    )}

    </div>
  );
}

export default App;
