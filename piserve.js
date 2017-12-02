// content of index.js
const http = require('http')
const port = 3000
var url = require('url');
'use strict';
const assert = require('assert');
const sense = require('sense-hat-led');

const requestHandler = (request, response) => {
  console.log(request.url)
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
let t = 0.2;
  var lst = query["message"];
  console.log(lst);
  sense.sync.showMessage(lst, t / 10);
  sleep(t);


  response.end('Shrapp pap pap!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
