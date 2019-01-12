
 let socket = io();

 socket.on('connect', function () { 
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', () =>{
     console.log('Perdimos conexión con le servidor');
 });
 
 //emit para emitir o enviar informacion 
 socket.emit('enviarMensaje', {
     usuario: 'Luis Angel',
     mensaje: 'Teste de sockets'
 }, (resp) => {
     console.log('Respuesta server: ', resp);
 });

 //escuchar informacion emitida por el servidor
 socket.on('enviarMensaje', (resp) => {
     console.log('informacion emitida por el servidor:', resp);
 });