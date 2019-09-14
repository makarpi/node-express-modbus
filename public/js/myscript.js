/*

    File: myscript.js 
    Description: Contains frontend script: views/index.html

*/
setInterval( () => {
    fetch('/modbus')
        .then( resp => resp.json())
        .then( resp => {
           let listGroupContent = '<ul class="list-group">';

           console.log(resp);
           resp.forEach(element => {
                console.log(element);
                listGroupContent += `<li class="list-group-item">${element.nazwa}<span class="badge jednostki">${element.wartosc} ${element.jednostka}</span></li>`;
            });

            listGroupContent += '</ul>';

            document.getElementById('modbusParamList').innerHTML = listGroupContent;
            
            //console.log(listGroupContent);
        })
}, 3000);
