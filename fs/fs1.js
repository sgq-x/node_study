/**
 * Node操纵文件系统是通过fs模块来处理的
 * 
 * 对于fs中的绝大多数api来说,都提供了相同功能的两个版本,同步版本,异步版本
 * 
 * 对于同步版本与异步版本来说, xxxx(异步) xxxSync(同步)
 * 
 * 尽最大可能去使用异步版本
 */

const fs = require('fs')

try {
  const data = fs.readFileSync('test.txt', 'utf8')
  console.log(data)
} catch (e) { 
  console.log(e)
}

fs.readFile('test.txt', 'utf8', function(error, data) {
  if(error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

fs.writeFile('mytest.txt', 'mytest, node.js', function(error) {
  if(error) {
    console.log(error)
  } else {
    console.log('write file successful')
  }
})

fs.writeFile('mytest2.txt', 'mytest2, node.js\r\n',{flag: 'a'}, function(error) {
  if(error) {
    console.log(error)
  } else {
    console.log('write file successful')
  }
})