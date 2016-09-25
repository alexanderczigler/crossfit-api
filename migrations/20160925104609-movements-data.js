'use strict'

var data = require('./movements.json')

exports.up = function (r, connection) {
  return r.table('movements').insert(data).run(connection)
}

exports.down = function (r, connection) {
  return r.table('movements').delete().run(connection)
}
