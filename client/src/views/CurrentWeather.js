import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';
const JsonTable = require('ts-react-json-table');
class CurrentWeather extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getData(){
    setTimeout(() => {
      fetch('/search-location-weather')
  .then(res => res.json())
  .then(data => this.setState({ data }));
      console.log('Our data is fetched');
      
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <table>
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.time}</td>
                      <td>{item.weather_description}</td>
                      <td>{item.temp_min}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
    )
  }
  
}

  export default CurrentWeather;