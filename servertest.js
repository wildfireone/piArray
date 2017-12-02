const http = require('https');


makeRequest('127.0.0.1', "type=red");
makeRequest('127.0.0.1', "type=green");
makeRequest('127.0.0.1', "type=blue");



function makeRequest(ip, args){
  http.get('http://'+ip+':3000?'+args, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log('done to '+ip);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
