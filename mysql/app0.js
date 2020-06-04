const mysql = require('mysql')
const uuid = require('uuid')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'article'
})

connection.connect((err) => {
  if(err) {
    console.log(err)
    throw err
  } else {
    console.log('connection successful')
  }
})