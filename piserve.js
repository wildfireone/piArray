'use strict';

const http = require('http')
const port = 3000
const url = require('url');

const sense = require('sense-hat-led');
const sleep = sense.sync.sleep;

const buildArray = (size, value) => {
  return Array(size).fill(value);
}

const B = [248, 252, 248];

const ledSize = 8 * 8;

const on = buildArray(ledSize, B);
const off = buildArray(ledSize, 0);

const requestHandler = (request, response) => {
  console.log(request.url);

  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  if (query["type"] == "msg") {
    let t = parseInt(query["t"]);
    var lst = query["msg"];

    console.log(query);
    console.log(lst);
    console.log(t);

    sense.sync.showMessage(lst, t / 10);
    sleep(t);
  } else if (query["type"] == "colour") {
    let r = parseInt(query["r"]);
    let g = parseInt(query["g"]);
    let b = parseInt(query["b"]);

    var colour = [r, g, b];
    var localarray = buildArray(8 * 8, colour);

    sense.setPixels(localarray);
  } else if (query["type"] == "red") {
    var colour = [255, 0, 0];
    var localarray = buildArray(ledSize, colour);

    sense.setPixels(localarray);
  } else if (query["type"] == "green") {
    var colour = [0, 255, 0];
    var localarray = buildArray(ledSize, colour);

    sense.setPixels(localarray);
  } else if (query["type"] == "blue") {
    var colour = [0, 0, 255];
    var localarray = buildArray(ledSize, colour);

    sense.setPixels(localarray);
  } else if (query["type"] == "on") {
    sense.sync.setPixels(on);
  } else {
    sense.sync.clear();
  }

  response.end('Shrapp pap pap!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})