/**
 * 主子进程通信 spawn fork
 */

const childProcess = require('child_process')

const forkProcess = childProcess.fork('./app5', {silent: true})

forkProcess.on('message', (message) => {
  console.log(message)
})

forkProcess.send('hello world')