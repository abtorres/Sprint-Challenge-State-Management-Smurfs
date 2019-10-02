import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
//Smur Context
import SmurfContext from '../contexts/SmurfContext';
import FormikSmurfForm from './SmurfForm/SmurfForm';

function App() {
  const [smurfs, setSmurfs] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        setSmurfs(res)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

    return (
      <div className="App">
        <SmurfContext.Provider value={smurfs}>
          <div>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
          </div>
          <FormikSmurfForm />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
