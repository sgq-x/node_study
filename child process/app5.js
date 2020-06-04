[1,2,3,4,5].forEach(i => {
  console.log(i)
})


process.on('message', (message) =>{
  console.log(message)

  process.send('welcome')
})