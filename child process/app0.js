/**
 * 有4种生成子进程的方式
 */

const childProcess = require('child_process')

const lschildProcess = childProcess.spawn('ls', ['-al', './'])

lschildProcess.stdout.on('data', (data) => {
  console.log(data.toString())
  console.log(`child process id: ${lschildProcess.pid}`)
})

lschildProcess.on('exit', (code, signal) => {
  console.log(code)
})