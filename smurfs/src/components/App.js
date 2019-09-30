import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import SmurfContext from '../contexts/SmurfContext';
function App() {
  const [smurfs, setSmurfs] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        setSmurfs(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })

    return (
      <div className="App">
        <SmurfContext.Provider value={smurfs}>
          <div>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
          </div>
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
