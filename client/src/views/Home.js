import React from 'react';
import LightningBolt from './assets/lightning.svg';

const Home = () => {

  return (
    <div>
      <div className='header'>
        <h2>Weather Forcast</h2>
        <img src={LightningBolt}/>
      </div>
      <div className="instructions">
        <p>Enter a US city name below to get the  weather conditions for that area.</p>
      </div>
      <div className='zipcodeInput'>
        <form method='POST' action='/search-location'>
          <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
          <button>ENTER</button>
        </form>
      </div>
      <div className='groupby'>
        <form method='POST' action='/group-weather'>
          <input type='text' placeholder='Enter groupby attr' name='groupattr'/>
          <button>ENTER</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
