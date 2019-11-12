const fetch = require('node-fetch');
const Influx = require('influx');
const influx= new Influx.InfluxDB({
  host: 'localhost',
  database: 'weatherAtlanta',
  port:8086
  });

module.exports = (app) => {

  let zipcode;

  app.post('/search-location', (req, res) => {

    zipcode = req.body.zipcode;

    if (!zipcode || zipcode!='atlanta') {
      res.redirect('/error');
    } else {
      res.redirect('/current-weather');
    }
  });

  app.get('/search-location-weather', (req, res) => {
    // build api URL with user zip
    influx.query(`
      select * from ${zipcode}
      where "weather_main"='Drizzle'
      limit 10
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

