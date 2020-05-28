const fs = require('fs')

fs.unlink('hello.txt', (error) => {
  if(error) {
    throw error
  }

  console.log('success')
})