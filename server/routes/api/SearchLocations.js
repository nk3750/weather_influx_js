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
  let tag;
  let field;
  let startdate;
  let enddate;
//Search Location
  let city;
  let aggFunc;
  let aggAttr;
  let startDateTime;
  let endDateTime;
  let timeInterval;
  
  app.post('/search-location', (req, res) => {

    zipcode = req.body.zipcode;
    tag=req.body.tag;
    field=req.body.field;
    startdate=req.body.startdate.concat(':00.000Z');
    enddate=req.body.enddate.concat(':00.000Z');

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
    console.log(aggAttr,aggFunc,timeInterval);
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
    console.log(startdate);
    influx.query(`
      select "${tag}", "${field}" from ${zipcode} where time >= '${startdate}' AND time <= '${enddate}'
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

