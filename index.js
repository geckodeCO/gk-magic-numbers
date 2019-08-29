const mimes = require('./data/mime.js');
var mime = mimes.mimes;

var fs = require('fs');

var data = fs.readFileSync('prueba4.mp3');

var ab = data.buffer;

var buffer_hex = new Buffer(ab, "hex");
buffer_hex = buffer_hex.slice(0,6);

console.log(buffer_hex);

var type = 'Unknown filetype';

for (var i = 0; i < mime.length ; i++) {

  if (buffer_hex.indexOf(mime[i].mime, 0, 'hex') == 0) {
    console.log('entro');
    type = mime[i].type;
  }
}

console.log(type);

// nota si buffer.indexof es igual a 0 significa que si empieza por el siguiente mime