const fs = require('fs')

/**
 * mkdir只能创建一层目录
 * 
 * 要创建多层,加recursive
 */

fs.mkdir('mydir/hello',{recursive: true}, (err) => {
  if(err) {
    throw err
  }


  console.log('success')
})