import { useEffect, useState } from 'react';
import Header from './components/Header';
import ApiIntroduction from './components/ApiIntroduction';
import Main from './components/Main';
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
    builderHallLevel={builderHallLevel}
     />
    <Main
    leagueName={leagueName}
    trophies={trophies}
    bestTrophies={bestTrophies}
    mediumIcon={mediumIcon}
    previousTrophies={previousTrophies}
    bestSeasonTrophies={bestSeasonTrophies}
    currentTrophies={currentTrophies}
      />

    </div>
  );
}

export default App;
