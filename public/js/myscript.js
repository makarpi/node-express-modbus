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

window.onload = function(){
    var tekst = '<ul class="list-group">'

    // for (i = 0; i < 5; i++) {
    //     tekst += `<li class="list-group-item">Rejestr ${modbus[i].rejestr}</li>`;
    // }
    // $.each(modbus, function(i, value){
    //     tekst += `
    //     <ul class="list-group list-group-horizontal-md">
    //         <li class="list-group-item flex-fill">${modbus[i].nazwa}</li>
    //         <li class="list-group-item flex-fill">${modbus[i].wartosc}</li>
    //     </ul>`;
    // });
    $.each(modbusRegister, function(i, value){
        tekst += `<li class="list-group-item">${modbusRegister[i].nazwa}<span class="badge jednostki">${modbusRegister[i].wartosc} ${modbusRegister[i].jednostka}</span></li>`;
    });


    tekst += '</ul>';
    $('#petlaEach').append(tekst);
}