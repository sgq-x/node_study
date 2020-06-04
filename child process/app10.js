const childProcess = require('child_process')

childProcess.execFile('node', ['app9'], (error, stdout, stderr) => {
  if(error) {
    console.log(error)
  } else {
    console.log(stdout.toString())
  }
})