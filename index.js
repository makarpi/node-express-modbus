const express = require('express');
const path = require('path');

// Init App
const app = express();

//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

//  Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000');
})