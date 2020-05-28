/**
 * 删除目录
 */

 const fs = require('fs')

 fs.rmdir('mydir', (err) => {
   if(err) {
     throw err
   }

   console.log('success')
 })