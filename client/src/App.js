
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [backendData, setBackendData] = useState({}) 

  useEffect(() => {
    fetch("api")
    .then(res => res.json())
    .then(data => setBackendData(data))
  },[])

  const {name, tag, townHallLevel} = backendData


  return (
    <div className="App">
    {(typeof backendData.tag === "undefined") ? (
      <p>...loading</p>
    ) : (
      <p>{name} {tag} {townHallLevel}</p>
    )}

    </div>
  );
}

export default App;
