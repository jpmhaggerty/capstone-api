const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('knex')(require('/home/brendankennedy/SupraCoders/Capstone/api/knexfile.js')[process.env.NODE_ENV||'development']);

//Test
app.get('/', (req, res) => {
  res.status(200).send('Hello Express World!');
});


//Rule 1: Lightning
app.get('/rules/lightning', function(req, res) {
  knex
    .select('*')
    .from('lightning_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 2: Surface Electric Field Mill
app.get('/rules/sefm', function(req, res) {
  knex
    .select('*')
    .from('surface_electric_field_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 3: Cumulus Cloud
app.get('/rules/cumulus', function(req, res) {
  knex
    .select('*')
    .from('cumulus_cloud_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 4: Attached Anvil Cloud
app.get('/rules/attached', function(req, res) {
  knex
    .select('*')
    .from('attached_anvil_cloud_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 5: Detached Anvil Cloud
app.get('/rules/detached', function(req, res) {
  knex
    .select('*')
    .from('detached_anvil_cloud_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 6: Debris Cloud
app.get('/rules/debris', function(req, res) {
  knex
    .select('*')
    .from('debris_cloud_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 7: Disturbed Weather
app.get('/rules/disturbed', function(req, res) {
  knex
    .select('*')
    .from('disturbed_weather_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 8: Thick Cloud Layer
app.get('/rules/thick', function(req, res) {
  knex
    .select('*')
    .from('thick_cloud_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

//Rule 9: Smoke Plume
app.get('/rules/smoke', function(req, res) {
  knex
    .select('*')
    .from('smoke_plume_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//Rule 10: Tribo-Electro 
app.get('/rules/tribo', function(req, res) {
  knex
    .select('*')
    .from('tribo_electric_rule')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

module.exports = app;
