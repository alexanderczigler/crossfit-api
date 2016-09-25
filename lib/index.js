'use strict'

const rethink = require('./services/rethink')

const koa = require('koa')
const koaRouter = require('koa-route')
const app = koa()

app.use(koaRouter.get('/', function *() {
  this.body = 'CrossFit API'
}))

app.use(koaRouter.get('/movements', function *() {
  yield rethink.getMovements()
  .then(movements => {
    this.body = movements
  })
  .catch(error => {
    console.log('ERROR', error)
  })
}))

app.listen(process.env.PORT || 3000)
