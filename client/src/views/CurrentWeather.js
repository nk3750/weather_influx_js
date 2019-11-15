import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';
import { JsonToTable } from "react-json-to-table";
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip } from 'recharts';
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
  .then(data => this.setState({data:data}));
      console.log('Our data is fetched');
      
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    var js0=this.state.data[0];
    let prop=[];
    for ( var property in this.state.data[0] ) {
        prop.push(property)
      }
    console.log(prop);
    return(
      <div>
        
        <JsonToTable json = {this.state.data} />
        <LineChart width={400} height={400} data={this.state.data}>
    <Line type="monotone" dataKey={prop[3]} stroke="#8884d8" />
    <Line type="monotone" dataKey={prop[4]} stroke="#FF3366" />
    <Line type="monotone" dataKey={prop[5]} stroke="#CCFF33" />
    <Line type="monotone" dataKey={prop[6]} stroke="#CC0099" />
    <Line type="monotone" dataKey={prop[7]} stroke="#330066" />
    <Line type="monotone" dataKey={prop[8]} stroke="#0000CC" />

    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey={prop[0]} />
    <YAxis />
    <Tooltip />
  </LineChart>
    
    </div>
    )
  }
  
}

  export default CurrentWeather;