import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';

class groupWeather extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Aayega'
    }
  }

  getData(){
    setTimeout(() => {
      fetch('/group-location-weather')
  .then(res => res.json())
  .then(data => this.setState({ data:JSON.stringify(data,undefined,4) }));
      console.log('Our data is fetched');
    
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
  
}

  export default groupWeather;