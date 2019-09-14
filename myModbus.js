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

const setModbusRegisterValue = (address, value) => {
    modbusRegister[address] = value;
}

// open connection to a serial port
client.connectRTU("/dev/ttyS21", { baudRate: 9600 }, function(){
    console.log('Połączono z ModbusRTU');
  });

client.setTimeout(2000);

// list of meter's id
const modbusSlaveId = 1;
const getMetersValue = async (modbusRegisters) => {
    try{
        // get value of all meters
        for(let [i, modbus] of modbusRegisters.entries()) {
            // output value to console
            modbusRegister[i].wartosc = await getMeterValue(modbus.rejestr);
            
            console.log(modbus.wartosc);
            // wait 100ms before get another device
            await sleep(100);
        }
    } catch(e){
        // if error, handle them here (it should not)
        console.log(e)
    } finally {
        // after get all data from salve repeate it again
        setImmediate(() => {
            getMetersValue(modbusRegisters);
        })
    }
}
 
const getMeterValue = async (registerAddress) => {
    try {
        // set ID of slave
        await client.setID(modbusSlaveId);
        // read the 1 registers starting at address 0 (first register)
        let val =  await client.readInputRegisters(registerAddress, 1);
        // return the value
        return val.data[0];
    } catch(e){
        // if error return -1
        return -1
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// start get value
getMetersValue(modbusRegister);
