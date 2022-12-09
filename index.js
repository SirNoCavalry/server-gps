const express = require('express');
const app = express();


console.log("Server on port ",4000);

const net = require('net');
const port= process.env.PORT || 5500;
const server = net.createServer()
app.get('/',(req, res) => {
    const ipAddress = req.header('x-forwarded-for') ||  			
						req.socket.remoteAddress;
                        res.send(ipAddress);                    
});
app.listen(4000);
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
})