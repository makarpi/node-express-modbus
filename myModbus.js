// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();

class Modbus {
    constructor(slaveId){
        this.slaveId = slaveId;
    }
}


var modbusRegister = [
    {
        'nazwa': 'Prąd Silnika',
        'rejestr': 0,
        'wartosc': 10,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Napięcie silnika',
        'rejestr': 1,
        'wartosc': 20,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Prędkość silnika',
        'rejestr': 2,
        'wartosc': 30,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Napięcie sieci',
        'rejestr': 3,
        'wartosc': 40,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
        'jednostka': 'A',
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
        'jednostka': 'A',
    },
];

// open connection to a serial port
client.connectRTU("/dev/ttyUSB0", { baudRate: 9600 }, function(){
    console.log('Połączono z ModbusRTU');
  });
  
  client.setID(1);
  
  function write() {
    //client.setID(1);
  
    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0 , 0xffff])
        .then(read(0,10));
  }
  
  
function read(startAddress, registerCount) {
    // read the 2 registers starting at address 5
    // on device number 1.
    client.readHoldingRegisters(startAddress, registerCount)
        .then(function(data){
            modbusDane = data;
            // console.log(modbusDane.data);
            console.log(data.data);
        });
  }
  
var currentRequest = 0;
var currentTimeout = 1500;

setInterval(function(){
    console.log('Odczyt rejestrów adres: ' + currentRequest * 10);
    read(currentRequest * 10, 10);

    // console.log(modbusDane);

    currentRequest++;

    if(currentRequest > 3) {
        currentRequest = 0;
    }
}, currentTimeout);
  