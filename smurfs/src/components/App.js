import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
//Smurf Context
import SmurfContext from './contexts/SmurfContext';
import FormikSmurfForm from './SmurfForm/SmurfForm';
import DisplaySmurfs from './DisplaySmurfs/DisplaySmurfs';

function App() {
  const [smurfs, setSmurfs] = useState([]);
  // console.log(typeof(smurfs))

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        setSmurfs(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

    return (
      <div className="App">
        <SmurfContext.Provider value={ {smurfs, setSmurfs} }>
          <div>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
          </div>
          <FormikSmurfForm setSmurfs={setSmurfs}/>
          <DisplaySmurfs />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
