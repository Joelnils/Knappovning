import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Buttons} from './BlueButton';



const App = () => {
  const handleClick = () => {
    console.log('Knappen klickades!');
  };

  return (
    <div>
      <Buttons color="blue" text="Blå knapp" onClick={handleClick}  />
      <Buttons color="red" text="Röd knapp" onClick={handleClick}  />
      <Buttons color="yellow" text="Gul knapp" onClick={handleClick}  />

    </div>
  
  );
};


export default App;
