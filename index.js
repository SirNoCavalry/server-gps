const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
    

})
/*const IP = require('ip');
app.get('/',(req, res) => {const ipAddress = IP.address();res.send(ipAddress)});
app.listen(4001);
console.log("Server on port ",4001);*/

/*const net = require('net');
const port= process.env.PORT || 5500;
const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + data)
        socket.write('Recibido!')
    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})
server.listen(port, ()=>{
    console.log('servidor esta escuchando en la puerta', server.address().port)
})*/