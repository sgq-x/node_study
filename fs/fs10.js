/**
 * 拿到相对路径 去获取绝对路径
 */

 const fs = require('fs')

 fs.realpath('fs1.js', (err, resolvedPath) => {
    if(err) {
      throw err
    }
    console.log(resolvedPath)
 })