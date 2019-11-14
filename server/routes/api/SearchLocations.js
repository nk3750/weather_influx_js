const fetch = require('node-fetch');
const Influx = require('influx');
const influx= new Influx.InfluxDB({
  host: 'localhost',
  database: 'weatherAtlanta',
  port:8086
  });

module.exports = (app) => {

  let zipcode;
  // let groupattr;
  let tag=[];

  let weather_description;
  let weather_main;
  let field=[];
  let clouds_all;
  let humidity;
  let pressure;
  let temp;
  let temp_max;
  let temp_min;
  let startdate;
  let enddate;
  let relStartTime;
  let relendTime;
  let relative_time;
//Search Location
  let city;
  let aggFunc;
  let aggAttr;
  let startDateTime;
  let endDateTime;
  let timeInterval;
  
  app.post('/search-location', (req, res) => {
    field=[];
    tag=[];
    zipcode = req.body.zipcode;
    // tag=req.body.tag;
    weather_description=req.body.weather_description;
    weather_main=req.body.weather_main;
    clouds_all=req.body.clouds_all;
    humidity=req.body.humidity;
    pressure=req.body.pressure;
    temp=req.body.temp;
    temp_max=req.body.temp_max;
    temp_min=req.body.temp_min;
    if (weather_main){
      tag.push(weather_main)
    }
    if (weather_description){
      tag.push(weather_description)
    }
    if (clouds_all){
      field.push(clouds_all)
    }
    if (humidity){
      field.push(humidity)
    }
    if (pressure){
      field.push(pressure)
    }
    if (temp){
      field.push(temp)
    }
    if (temp_max){
      field.push(temp_max)

    }
    if (temp_min){
      field.push(temp_min)
    }
    // tag.push(weather_description,weather_main);
    relative_time=req.body.relative_time;
    if (relative_time){
      startdate=req.body.relStartTime;
      enddate=req.body.relendTime;
    }
    else{ 
    startdate=req.body.startdate.concat(':00.000Z');
    startdate="'" + startdate + "'"
    enddate=req.body.enddate.concat(':00.000Z');
    enddate="'" + enddate + "'"
  }
    subscribe=req.body.subscribe;
    if (!zipcode) {
      res.redirect('/error');
    } else if(zipcode!='atlanta' || zipcode!='rochester') {
      res.redirect('/current-weather');
    }
    else{
      res.redirect('/error')
    }
  });
  // app.post('/group-weather', (req, res)) => {
  //    groupattr=req.body.groupattr;
  // });
  app.post('/group-weather', (req, res) => {

    city=req.body.city;
    aggFunc=req.body.aggFunc;
    aggAttr=req.body.aggAttr;
    startDateTime=req.body.startDateTime.concat(':00.000Z');
    endDateTime=req.body.endDateTime.concat(':00.000Z');
    timeInterval=req.body.timeInterval;
    res.redirect('/group-weather')
  });
  app.get('/group-location-weather', (req, res) => {
    // build api URL with user zip
    console.log(city);
    // console.log(aggAttr,aggFunc,timeInterval);
    influx.query(`
      select ${aggFunc}("${aggAttr}") from ${city}
      where time >= '${startDateTime}' AND time <= '${endDateTime}'
      GROUP BY time(${timeInterval})
    `).then(result => {
      res.json(result)
      .then(data => {
        res.send({ data });
      })
    }).catch(err => {
      res.status(500).send(err.stack)
    })
  })

  app.get('/search-location-weather', (req, res) => {
    // build api URL with user zip
    console.log(tag);
    console.log(field);
    console.log(startdate);
    console.log(enddate);
    influx.query(`
      select ${tag}, ${field} from ${zipcode} where time >= ${startdate} AND time <= ${enddate}
    `).then(result => {
      res.json(result)
      .then(data => {
        res.send({ data });
        
      })
    }).catch(err => {
      res.status(500).send(err.stack)
    })
  })

};

