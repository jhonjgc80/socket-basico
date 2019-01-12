//codigo de configuracion de los sockets

const { io } = require('../server');

//para saber cuando un usuario se conecta al server
io.on('connection', (client) =>{
    console.log('Usuario conectado');
    
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Se ha conectado por medio de sockets'
    });

    //on: escuchar sucesos
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //emitimos informacion a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         resp: 'Fallo la recepción!!!!!'
        //     })
        // }

        // callback();

    })
});