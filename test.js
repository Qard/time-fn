'use strict'

var tap = require('tap')
var timeFn = require('./')

tap.test('it gets the times', function (t) {
  timeFn(function (cb) {
    setImmediate(cb)
  }, function (time) {
    t.ok(time, 'callback has time object')
    t.ok(time.seconds, 'time object has seconds')
    t.ok(time.milliseconds, 'time object has milliseconds')
    t.ok(time.nanoseconds, 'time object has nanoseconds')
    t.end()
  })
})
