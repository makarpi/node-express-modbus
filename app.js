const express = require('express');
const path = require('path');

// Moje Skrypty
const myModbus = require('./myModbus.js');

// Init App
const app = express();
//import {returnModbusRegister } from './myModbus.js';

var myModbusik = require('./myModbus.js');

myModbusik.addToRegister('ID urządzenia', 0, 10, '', 0);
myModbusik.addToRegister('Moc bierna chwilowa', 1, 10, 'Var', 0);
myModbusik.addToRegister('Moc czynna chwilowa', 2, 10, 'W', 0);
myModbusik.addToRegister('Napięcie RMS fazy A', 3, 10, 'V', 0);
myModbusik.addToRegister('Napięcie RMS fazy B', 4, 10, 'A', 0);
myModbusik.addToRegister('Napięcie RMS fazy C', 5, 10, 'A', 0);
myModbusik.addToRegister('Prąd RMS fazy A', 6, 10, 'A', 0);
myModbusik.addToRegister('Prąd RMS fazy B', 7, 10, 'A', 0);
myModbusik.addToRegister('Prąd RMS fazy C', 8, 10, 'A', 0);
// myModbusik.addToRegister('Prąd silnika', 9, 10, 'A', 0);
// myModbusik.addToRegister('Prąd silnika', 10, 10, 'A', 0);
// myModbusik.addToRegister('Prąd silniczka', 11, 10, 'BLA', 0);

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