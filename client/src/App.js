import { useEffect, useState } from 'react';
import Header from './components/Header';
import ApiIntroduction from './components/ApiIntroduction';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

import phoneBitcoin from "./images/phone_clash_bitcoin.png";
import phoneMain from "./images/phone_clash_main.png";
import phoneWar from "./images/phone_clash_war.png";
import phoneZombie from "./images/phone_clash_zombie.png";


function App() {
  
  const [backendData, setBackendData] = useState({}) 
  const [image, setImage] = useState(phoneWar)

  const phoneImages = [phoneBitcoin, phoneMain, phoneWar, phoneZombie];
  // Need to implement unique selection

  const randomImage = async () => {
    const randomPicker = await phoneImages[Math.floor(Math.random() * phoneImages.length)]
    console.log(randomPicker);
    setImage(randomPicker);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("api")
      const data = await response.json()
      setBackendData(data)
    })()

    setTimeout(() => {
     const interval = setInterval(() => {
        randomImage()
      },5000)
      // Clear interval not needed cuz of SPA?
      return () => clearInterval(interval);
    },5000)
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
    defaultImage={image}
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
  <Footer />
    </div>
  );
}

export default App;
