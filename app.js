const express = require('express');
const path = require('path');

// Moje Skrypty
const myModbus = require('./myModbus.js');

// Init App
const app = express();
//import {returnModbusRegister } from './myModbus.js';

var myModbusik = require('./myModbus.js');

myModbusik.addToRegister('Prąd silnika', 0, 10, 'A', 0);
myModbusik.addToRegister('Napięcie silnika', 1, 10, 'V', 0);
myModbusik.addToRegister('Prędkość silnika', 2, 10, 'rpm', 0);
myModbusik.addToRegister('Napięcie sieci', 3, 10, 'V', 0);
myModbusik.addToRegister('Prąd pobierany z sieci', 4, 10, 'A', 0);
myModbusik.addToRegister('Prąd bla bla', 5, 10, 'A', 0);
myModbusik.addToRegister('Prąd silnika', 6, 10, 'A', 0);
myModbusik.addToRegister('Prąd silnika', 7, 10, 'A', 0);
myModbusik.addToRegister('Prąd silnika', 8, 10, 'A', 0);
myModbusik.addToRegister('Prąd silnika', 9, 10, 'A', 0);
myModbusik.addToRegister('Prąd silnika', 10, 10, 'A', 0);

//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/modbus', (req, res) => {
    res.json(myModbusik.returnModbusRegister());
})


//  Start Server
app.listen(3000, function(){

    console.log('Server started on port 3000');
})