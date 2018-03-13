'use strict'

var hrtime = require('convert-hrtime')

module.exports = function time (task, callback) {
  var start = process.hrtime()
  task(() => callback(hrtime(process.hrtime(start))))
}
