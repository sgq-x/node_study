const net = require('net')

const server = net.createServer((socket) => {
  console.log('服务连接')
  console.log(socket)
})

server.listen(8888, () => {
  console.log('server启动')
})