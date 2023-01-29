const http = require('http')

http.createServer( (req, res) => {

    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //     id: 1,
    //     nombre: "Prisciliano"
    // }

    // res.write( JSON.stringify(persona) );

    // res.write( 'id', 'nombre\n' );
    // res.write( '1', 'Prisciliano\n' );
    // res.write( '2', 'Efren\n' );
    // res.write( '3', 'Tecla\n' );
    // res.write( '4', 'Moisés\n' );

    res.write('Hola Mundo')

    res.end()
})
.listen( 8080 )

console.log('Escuchando el puerto', 8080);