const express = require('express');
const app = express();
const port = 3000;

//here's our test data 
var data = require('./data/test.json');

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index',{title:title});
});

app.get('/about-us', (req, res) => {
  var title = 'My About Us Page';
  res.render('pages/about-us',{title:title});
});

//list page of users 
app.get('/users', function(req, res) {
    var title = 'Users Page';
    res.render('users/index', {
        title: title,
        users: data
    });
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.get('/mission', (req, res) => {
  var title = 'Mission';
  res.render('pages/mission',{title:title});
});

app.get('/financials', (req, res) => {
  var title = 'Financials';
  res.render('pages/financials',{title:title});
});

app.get('/cards', (req, res) => {
  var title = 'Cards';
  res.render('pages/cards',{title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});