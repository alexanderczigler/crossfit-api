exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('exercises').run(connection)
  ])
}

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('exercises').run(connection)
  ])
}
