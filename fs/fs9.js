/**
 * 检测文件是否存在
 */

const fs = require('fs')

fs.access('./fs1.js', (err) => {
  if(err) {
    throw err
  }

  console.log('success')
})