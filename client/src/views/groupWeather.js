import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';
import { JsonToTable } from "react-json-to-table";
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from 'recharts';
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
      console.log('Our data is fetched ');
    
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
          <LineChart width={800} height={300} data={this.state.data}>
    <Line type="monotone" dataKey={prop[1]} stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis  dataKey={prop[0]} />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
    </div>
    
    
    )
  }
  
}

  export default groupWeather;