const path = require('path')
const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// var hbs = handlebars.create({
//   helpers: {
//       sayHello: function () { alert("Hello World") },
//       getStringifiedJson: function (value) {
//           return JSON.stringify(value);
//       },
//   },
//   defaultLayout: 'main',
//   partialsDir: ['views/partials/'],
//   extname:'.hbs',
//   // layoutsDir: path.join(__dirname, 'views/layouts/'),
//   // partialsDir  : [
//   //     //  path to your partials
//   //     path.join(__dirname, 'views/partials/'),
//   // ]

// });

app.use(morgan('combined'));
// hbs.engine
// app.engine('hbs',hbs.engine);
app.engine('hbs', hbs.create({extname: 'hbs', defaultLayout: 'main', layoutDir: __dirname + '/views/layouts'}).engine);
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname,'resoures//views'))
console.log('PATH: ', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})