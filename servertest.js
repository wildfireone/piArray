var http = require('http');

var queue = [];
var current = 0;
var delay = 0.5;
queueRequest('127.0.0.1', "type=red");
queueRequest('127.0.0.1', "type=green");
queueRequest('127.0.0.1', "type=blue");

doRequest();

function doRequest(){
    makeRequest(queue[current]["ip"],queue[current]["args"] )

}


function queueRequest(ip, args){
var req = {"ip" :ip, "args":args };
queue.push(req);
}



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
      current = current+1;
      if(current<queue.length){
      setTimeout(doRequest, delay * 1000);
    }
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
