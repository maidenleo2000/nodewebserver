
const http = require('http');

//request son los datos pedidos, response la respuesta del servidor
http.createServer((request, response)=> {
    console.log(request);

    // response.writeHead(200, {'Content-Type': 'application/json'});
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content-Type': 'application/csv'});

    const persona = {
        id: 1,
        nombre: 'Leandro'
    }


    // response.write('404 | Page not found');
    // response.write(JSON.stringify(persona));
    response.write('Hola Mundo');
    
    response.end(); //debo especificar con el end que ya se termino de ejecutar la respuesta porque sino el proceso queda cargando en este caso en el navegador web
})
.listen(8080);

console.log('escuchando el puerto', 8080);


