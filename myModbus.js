// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();

var modbusRegister = [
];

module.exports = {
    returnModbusRegister: function() {
        return modbusRegister;
    },
    addToRegister: (name, registerNumber, value, unit, parametr) => {
        modbusRegister.push({
            nazwa: name,
            rejestr: registerNumber,
            wartosc: value,
            jednostka: unit,
            param: parametr,
        })
    }
}

// open connection to a serial port
client.connectRTU("/dev/ttyS21", { baudRate: 9600 }, function(){
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
    
  }

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
 

const getRegisterValue = async () => {
    try{
        
        // modbusRegister.forEach(element => {
            
            
        // client.readHoldingRegisters(registerAddress, 1)
        // .then(function(data){
        //     //for(i = startAddress; i < registerCount; i++)
        //     //modbusRegister[i].wartosc = data;
        //     // console.log(modbusDane.data);
        //     console.log(data.data);
        //     await sleep(100);
        // });
        
        // })   
        for(let register of modbusRegister) {
            console.assertlog(await client.readHoldingRegisters(register.rejestr, 1));

            await sleep(100);
                console.log('proboje')

            // console.log(val);
        }
    }
    catch(e) {
        console.log(e);
    }
    
}
  
var currentRequest = 0;
var currentTimeout = 3000;

setInterval(function(){
    console.log('Odczyt rejestrów adres: ');
    getRegisterValue();
}, currentTimeout);
  