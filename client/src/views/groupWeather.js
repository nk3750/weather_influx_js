import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';
import { JsonToTable } from "react-json-to-table";

class groupWeather extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getData(){
    setTimeout(() => {
      fetch('/group-location-weather')
  .then(res => res.json())
  .then(data => this.setState({ data:data }));
      console.log('Our data is fetched');
    
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
         
          <JsonToTable json = {this.state.data} />
      
    </div>
    )
  }
  
}

  export default groupWeather;