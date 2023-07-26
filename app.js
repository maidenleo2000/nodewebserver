require('dotenv').config(); //Llamo a las variables de entorno definidas en .env
const express = require('express')
const hbs = require('hbs');

const app = express();
// const port = 8080;
const port = process.env.PORT;


//handlebars o hbs necesita de la carpeta views que es por defecto en donde busca las vistas a renderizar

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use( express.static('public') ); //Express busca el index.html para servirlo en esta peticion


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Leandro Martello',
    titulo: 'Curso de Node'
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Leandro Martello',
    titulo: 'Curso de Node'
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Leandro Martello',
    titulo: 'Curso de Node'
  });
});
app.get('*', (req, res) => {
  res.render('404');
});

// app.get('/', (req, res) => { //esta linea nunca se va a ejecutar porque primero se ejecuta el app.use para el path /
//   res.send('Home Page')
// });

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo en su respectiva ruta')
// });

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// });

// app.get('*', (req, res) => {
// //  res.send('404 | Pagina no encontrada')
//     res.sendFile(__dirname + '/public/404.html') //__dirname porque su path tiene que ser absoluto y sino da error, y para esto basta con agregar el prefijo __dirname + 'la ubicacion en vscode'
// });

// app.listen(8080)

app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${port}`)
  })