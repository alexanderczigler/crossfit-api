'use strict'

import Koa from 'koa'
import Router from 'koa-router'
import routes from './routes'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'CrossFit API'
})

router.get('/movements', routes.movements)
router.get('/assistant/wods', routes.assistant)
router.post('/assistant/wods', routes.assistant)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT || 3000)
