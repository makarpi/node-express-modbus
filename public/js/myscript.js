var modbus = [
    {
        'nazwa': 'Prąd Silnika',
        'rejestr': 0,
        'wartosc': 10,
    },
    {
        'nazwa': 'Napięcie silnika',
        'rejestr': 1,
        'wartosc': 20,
    },
    {
        'nazwa': 'Prędkość silnika',
        'rejestr': 2,
        'wartosc': 30,
    },
    {
        'nazwa': 'Napięcie sieci',
        'rejestr': 3,
        'wartosc': 40,
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
    },
    {
        'nazwa': 'Prąd pobierany z sieci',
        'rejestr': 4,
        'wartosc': 50,
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
    $.each(modbus, function(i, value){
        tekst += `<li class="list-group-item">${modbus[i].nazwa}<span class="badge">${modbus[i].wartosc}</span></li>`;
    });


    tekst += '</ul>';
    $('#petlaEach').append(tekst);
}