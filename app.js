const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.get('/works', (request, response) => {
  const works = [
    { image: '/images/bookone.jpg', name: 'Himoshoppaajan joulu', year: 2000 },

    { image: '/images/booktwo.jpg', name: 'Tavataanko oikeasti?', year: 2001 },

    { image: '/images/bookthree.jpg', name: 'Kadonnut: Audrey', year: 2002 }
  ];

  response.render('works', { works });
});

app.get('/feedback', (request, response) => {
  response.render('feedback');
});

app.listen(3000);
