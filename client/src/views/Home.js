import React from 'react';
import LightningBolt from './assets/Paw-right -medium text.jpg';
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
        <div className="ib">
        <p>Enter city</p>
          <input type='text' placeholder='Enter City..' name='zipcode'/>
          </div>
          {/* <input type='text' placeholder='Enter tag' name='tag'/> */}
          <div className="ib">
          <p>Select Fields</p>
            <div>
              <input type="checkbox" id="weather_description" name="weather_description" value="weather_description"></input>
              <label for="weather_description">weather_description</label>
            </div>
            <div>
              <input type="checkbox" id="weather_main" name="weather_main" value="weather_main"></input>
              <label for="weather_main">weather_main</label>
            </div>
          
          </div>
          <div className="ib">
          <p>Select Tags</p>
            <div>
              <input type="checkbox" id="clouds_all" name="clouds_all" value="clouds_all"></input>
              <label for="clouds_all">clouds_all</label>
            </div>
            <div>
            <input type="checkbox" id="humidity" name="humidity" value="humidity"></input>
              <label for="humidity">humidity</label>
            </div>
            <div>
              <input type="checkbox" id="pressure" name="pressure" value="pressure"></input>
              <label for="pressure">pressure</label>
              </div>
              <div>
              <input type="checkbox" id="temp" name="temp" value="temp"></input>
              <label for="temp">temp</label>
              </div>
              <div>
              <input type="checkbox" id="temp_max" name="temp_max" value="temp_max"></input>
              <label for="temp_max">temp_max</label>
              </div>
              <div>
              <input type="checkbox" id="temp_min" name="temp_min" value="temp_min"></input>
              <label for="temp_min">temp_min</label>
              </div>
          </div>
          <div className="ib">  
          <p>Enter absolute start date-time     Enter absolute end date-time</p>
          <input type='datetime-local' placeholder='start date' name='startdate'/>
          <input type='datetime-local' placeholder='end date' name='enddate'/>
         
          </div>
          <div className="ib">  
          <p>Enter relative start and end dat-time </p>
              <input type='text' placeholder='Enter relative start time' name='relStartTime'/>
              <input type='text' placeholder='Enter relative end time' name='relendTime'/>
              <input type="checkbox" id="relative_time" name="relative_time" value="relative_time"></input>
            <label for="relative_time">Use Relative time instead?</label>

          </div>
          <div className="ib">  
          <p>Submit your query</p>
          <button>ENTER</button>
          </div>
        </form>
      </div>
      <div className='groupby'>
        <form method='POST' action='/group-weather'>
          <input type='text' placeholder='Enter City..' name='city'/>
          <input type='text' placeholder='Aggregate Function' name='aggFunc'/>
          <input type='text' placeholder='Aggregate Attribute' name='aggAttr'/>
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
