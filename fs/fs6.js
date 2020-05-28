const fs = require('fs')

fs.appendFile('info.txt', 'my info', 'utf8', (error) => {
  if(error) {
    console.log(error)
  }

  console.log('success')
})