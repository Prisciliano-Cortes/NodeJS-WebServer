const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 8080;

//** HANDLEBARS */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//** SERVIR CONTENIDO ESTÁTICO */
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Ruta principal')
// })

// app.get('/hola-mundo', (req, res) => {
//     res.send('Ruta hola mundo')
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Prisciliano Cortés',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Prisciliano Cortés',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Prisciliano Cortés',
        titulo: 'Curso de Node'
    });
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// })

// app.listen(8080)

app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${port}`)
})