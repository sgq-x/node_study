/**
 * 洋葱模型
 */

const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log('myFunctin started')
  await next()
  console.log('myFunctin finshed')
})
app.use(async (ctx, next) => {
  console.log('myFunctin2 started')
  await next()
  console.log('myFunctin2 finshed')
})
app.use(async (ctx, next) => {
  console.log('myFunctin3 started')
  await next()
  console.log('myFunctin3 finshed')
})

app.use(async (ctx) => {
  // ctx.body = 'Hello Koa'

  ctx.response.type = 'text/html'
  ctx.response.body = '<h2>Hello Koa</h2>'
})

app.listen(3000)