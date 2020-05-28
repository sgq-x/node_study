const fs = require('fs')

fs.open('test.txt', 'r+', function(error, fd) {
  if(error) {
    return console.error(error)
  }
  console.log('file is open') 
})