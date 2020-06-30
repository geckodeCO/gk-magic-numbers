'use strict'
const fs    = require('fs')
const mimes = require('./data/mime.js')

module.exports = {
  validate: function (file, shouldBe = false) {
    try {
      if(!file) throw new Error('File or buffer is required')
      let mime = mimes.mimes
      let type = 'Unknown filetype';
      let data = fs.readFileSync(file)
      let ab   = data.buffer
      let buffer_hex = new Buffer(ab, 'ex')
      buffer_hex = buffer_hex.slice(0,6)
      for (var i = 0; i < mime.length ; i++) {
        if (buffer_hex.indexOf(mime[i].pattern, 0, 'hex') == 0) {
          type = mime[i].type;
          break
        }
      }
      if (shouldBe) return type.includes(shouldBe.toLowerCase().trim())
      return type
    } catch (e) {
      return e.message
    }
  }
}