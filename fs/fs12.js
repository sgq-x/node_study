const fs = require('fs')

/**
 * 写入流
 */
const readStream = fs.createReadStream('./fs1.js', {encoding: 'utf8'})

readStream.on('open', (fd) => {
  console.log(fd)
})

readStream.on('ready', () => {
  console.log('ready')
})

readStream.on('data', (data) => {
  console.log(data)
})

readStream.on('end', () => {
  console.log('end')
})

readStream.on('close', () => {
  console.log('close')
})

readStream.on('error', (error) => {
  console.log(error)
})