const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/dashboard', (req, res) => {
  res.send('DashBoard Page');
});

app.get('/test', (req, res) => {
  res.send('test Page');
});

app.get('/test1', (req, res) => {
  res.send('test Page');
});

app.get('/test1', (req, res) => {
  res.send('test Page');
});

app.get('/test1', (req, res) => {
  res.send('test Page');
});

app.get('/test1', (req, res) => {
  res.send('test Page');
});

app.get('/tes', (req, res) => {
  res.send('test Page');
});

app.get('/tes1', (req, res) => {
  res.send('test Page');
});

app.listen(port, () => {
  console.log('Server Started, Port ', port);
});
