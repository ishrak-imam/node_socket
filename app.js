var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(8000, () => {
  console.log('server started on port 8000')
})

io.on('connection', (socket) => {
  setInterval(() => {
    socket.emit('heartBeat', { dateTime: new Date() })
  }, 1000)
});