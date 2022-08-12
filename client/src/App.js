import { useEffect, useState } from 'react';
import Header from './components/Header';
import ApiIntroduction from './components/ApiIntroduction';
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
    <Header />
    <ApiIntroduction
    name={name}
    townHall={townHallLevel}
    trophies={trophies}
    
     />

    {(typeof backendData.name === "undefined") ? (
      <p>...loading</p>
    ) : (
      <p>{name} {townHallLevel} {trophies} {bestTrophies} {builderHallLevel} {leagueName} {mediumIcon} {previousTrophies} {bestSeasonTrophies} {currentTrophies}</p>
    )}

    </div>
  );
}

export default App;
