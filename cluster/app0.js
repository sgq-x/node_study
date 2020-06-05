const cluster = require('cluster')
const http = require('http')
const os = require('os')

const cpuCount = os.cpus().length

/**
 * Master-Worker 模式
 * 
 * 3000端口号还是主进程在监听
 * 任务都分给子进程去监听
 */

if(cluster.isMaster) {
  for(let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(worker.process.pid)
  })
} else {
  const httpServer = http.createServer((request, response) => {
    let data = ''

    request.on('data', (chunk) => {
      data += chunk
    })

    request.on('end', () => {
      response.writeHead(200, {'Content-Type': 'text/plain'})

      response.end(`${process.pid}`)
    })
  })

  httpServer.listen(3000, () => {
    console.log('listening to port 3000')
  })
}