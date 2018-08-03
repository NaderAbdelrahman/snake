var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'pug');
app.use(express.static("public"));

// home page 
app.get('/', function (req, res) {
    res.render('game', {
    });
});

app.listen(3000);
console.log('3000 is the magic port');