import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfTown from './SmurfTown';
import axios from 'axios';

const App = () => {
  axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
          console.log(err);
        })

    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <SmurfForm />
        <SmurfTown />
      </div>
    );
  }


export default App;
