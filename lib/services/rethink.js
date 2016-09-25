'use strict'


const rethinkdbdash = require('rethinkdbdash')
const _ = require('lodash')

let r

function connect () {
  if (!r) {
    r = rethinkdbdash({
      'host': process.env.DB_HOST || 'rethink',
      'port': 28015,
      'db': 'crossfit_api'
    })
  }
}

function getMovements (id) {
  connect()
  return r.table('movements')
    .filter({'bodyWeight': true})
    .run()
}

function health () {
  connect()

  const start = Date.now()
  const info = {
    healthy: r.getPoolMaster()._healthy,
    pools: r.getPoolMaster()._healthyPools.length
  }

  return r.table('movements').info()
    .run()
    .then(() => _.merge(info, {
      time: Date.now() - start
    }))
    .catch(err => _.merge(info, {
      time: Date.now() - start,
      error: err
    }))
}

export default {
  getMovements,
  health
}
