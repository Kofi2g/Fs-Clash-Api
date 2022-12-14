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
import phoneDark from "./images/phone_clash_dark.png";
import phoneBeach from "./images/phone_clash_beach.png";
import phoneRoyal from "./images/phone_clash_royal.png";
import phoneIce from "./images/phone_clash_ice.png";

function App() {
  
  const [backendData, setBackendData] = useState({}); 
  const [image, setImage] = useState(phoneWar);
  const phoneImages = [phoneBitcoin, phoneMain, phoneWar, phoneZombie, phoneDark, phoneBeach, phoneRoyal, phoneIce];

  useEffect(() => {
    (async () => {
      const response = await fetch("https://clash-backend.herokuapp.com/")
      const data = await response.json()
      setBackendData(data)
    })()

     const interval = setInterval(() => {
      const randomPicker = phoneImages[Math.floor(Math.random() * phoneImages.length)]
      setImage(randomPicker);
      },5000)
      return () => clearInterval(interval);
  },[image])

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
