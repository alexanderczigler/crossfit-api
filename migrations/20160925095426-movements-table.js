exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('movements').run(connection)
  ])
}

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('movements').run(connection)
  ])
}
