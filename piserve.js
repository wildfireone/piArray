// content of index.js
const http = require('http')
const port = 3000
var url = require('url');

const requestHandler = (request, response) => {
  console.log(request.url)
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  console.log(query);
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
