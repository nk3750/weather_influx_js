import React from 'react';
import LightningBolt from './assets/lightning.svg';
import DateTimePicker from 'react-datetime-picker'
const Home = () => {

  return (
    <div>
      <div className='header'>
        <h2>Weather Forcast</h2>
        <img src={LightningBolt}/>
      </div>
      <div className="instructions">
        <p>Cities supported: rochester, atlanta</p>
      </div>
      <div className="tags">
        <p>Tags Supported: weather_description, weather_main</p>
      </div>
      <div className="field">
      <p>Fields Supported: clouds_all, humidity, pressure, temp, temp_max, temp_min</p>
      </div>
      <div className="time">
      <p>Time Supported:From: January 01, 2019
                        To: October 27, 2019 </p>
      </div>
      <div className='zipcodeInput'>
        <form method='POST' action='/search-location'>
          <input type='text' placeholder='Enter City..' name='zipcode'/>
          <input type='text' placeholder='Enter tag' name='tag'/>
          <input type='text' placeholder='Enter field' name='field'/>
          <input type='datetime-local' placeholder='start date' name='startdate'/>
          <input type='datetime-local' placeholder='end date' name='enddate'/>
          <button>ENTER</button>
        </form>
      </div>
      <div className='groupby'>
        <form method='POST' action='/group-weather'>
          <input type='text' placeholder='Enter City..' name='city'/>
          <input type='text' placeholder='Aggregate Function' name='aggFunc'/>
          <input type='text' placeholder='Aggregate Attribute' name='aggAttr'/>
          {/* <input type='text' placeholder='Enter groupby attr' name='groupattr'/> */}
          <input type='datetime-local' placeholder='start date' name='startDateTime'/>
          <input type='datetime-local' placeholder='end date' name='endDateTime'/>
          <input type='text' placeholder='Time Interval' name='timeInterval'/>
          <button>ENTER</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
