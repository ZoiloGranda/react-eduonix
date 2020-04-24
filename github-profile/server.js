const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const https = require('https')
const axios = require('axios');
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
 res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
 res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
 next();
});

app.get('/profile', function(req, res) {
 let githubToken = process.env.GITHUB_TOKEN
 let headers = {
  'Content-Type': 'application/json',
  'Authorization': `token ${githubToken}`,
 }
 axios.get('https://api.github.com/users/zoilogranda', {
   headers: headers,
  })
  .then(function(response) {
   console.log(response.config.headers);
   console.log(response.data);
   res.send(response.data)
  })
  .catch(function(error) {
   console.log(error);
  })
});

app.patch('/profile', function(req, res) {
 let githubToken = process.env.GITHUB_TOKEN
 let headers = {
  'Content-Type': 'application/json',
  'Authorization': `token ${githubToken}`,
 }
 axios.patch('https://api.github.com/user', {
   name: req.body.name,
   company: req.body.company,
   bio: req.body.bio,
   location: req.body.location
  }, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': `token ${githubToken}`,
   }
  })
  .then(function(response) {
   console.log(response.data);
   res.send(response.data)
  })
  .catch(function(error) {
   console.log(error.config);
   console.log(error.request.data);
   console.log(error.response.data);
  })
});

app.listen(port, () => {
 console.log(`listening on ${port}`)
});