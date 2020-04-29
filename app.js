var express = require('express');
var path = require('path');
var app = express();
const port = 3000

//setting up routes variables
const routes_index = require('./routes/routes');
const routes_playlist = require('./routes/routes');
const routes_home = require('./routes/routes');
const routes_titlepage = require('./routes/routes');

//setting up view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//setting up static folder
app.use(express.static(path.join(__dirname, 'public')));


//assigning routes to app
app.use('/', routes_index);
app.use('/playlist', routes_playlist);
app.use('/home', routes_home);
app.use('/titlepage', routes_index);

app.use(express.urlencoded());

app.listen(port);

console.log("website has started on port " + port);
