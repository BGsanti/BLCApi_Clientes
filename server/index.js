const express = require('express'); // todos los elementos del servidor del
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./conexion');

//configuracion 

app.set('port', process.env.PORT || 8082);


//funciones para procesar los datos
app.use(morgan('dev')); // al escribir el comando en terminal terminal
app.use(express.json());



// rutas de nuestro servidor 
app.use('/api/usuarios', require('./Routes/usuarios.routes'));

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log('servidor por el puerto ' +
        app.get('port'));
})