// var modbusRegister = [];



// window.onload = function(){

//     addToRegister('Prąd silnika', 0, 10, 'A', 0);
//     addToRegister('Napięcie silnika', 0, 10, 'V', 0);
//     addToRegister('Prędkość silnika', 0, 10, 'rpm', 0);
//     addToRegister('Napięcie sieci', 0, 10, 'V', 0);
//     addToRegister('Prąd pobierany z sieci', 0, 10, 'A', 0);
//     addToRegister('Prąd bla bla', 0, 10, 'A', 0);
//     addToRegister('Prąd silnika', 0, 10, 'A', 0);
//     addToRegister('Prąd silnika', 0, 10, 'A', 0);
//     addToRegister('Prąd silnika', 0, 10, 'A', 0);
//     addToRegister('Prąd silnika', 0, 10, 'A', 0);
//     addToRegister('Prąd silnika', 0, 10, 'A', 0);

//     var tekst = '<ul class="list-group">'

//     $.each(modbusRegister, function(i, value){
//         tekst += `<li class="list-group-item">${modbusRegister[i].nazwa}<span class="badge jednostki">${modbusRegister[i].wartosc} ${modbusRegister[i].jednostka}</span></li>`;
//     });


//     tekst += '</ul>';
//     $('#petlaEach').append(tekst);
// }


setTimeout( () => {
    fetch('/modbus')
        .then( resp => resp.json())
        .then( resp => {
           var tekst = '<ul class="list-group">';

           console.log(resp);
           resp.forEach(element => {
                console.log(element);
                tekst += `<li class="list-group-item">${element.nazwa}<span class="badge jednostki">${element.wartosc} ${element.jednostka}</span></li>`;
            });

            tekst += '</ul>';

            document.getElementById('petlaEach').innerHTML = tekst;

            //console.log(tekst);
        })
}, 1000);
