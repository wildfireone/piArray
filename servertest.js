var http = require('http');

var queue = [];
var current = 0;
var delay = 0.5;




piArray = [
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1",
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1",
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1",
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1",
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1",
  "127.0.0.1", "127.0.0.1","127.0.0.1", "127.0.0.1", "127.0.0.1", "127.0.0.1"
]

function drawLetter(letter) {
  switch(letter){
    case 'A' : {draw(A);}
    case 'B' : {draw(B);}
    case 'C' : {draw(C);}
    case 'D' : {draw(D);}
    case 'E' : {draw(E);}
    case 'F' : {draw(F);}
    case 'G' : {draw(G);}
    case 'H' : {draw(H);}
    case 'I' : {draw(I);}
    case 'J' : {draw(J);}
    case 'K' : {draw(K);}
    case 'L' : {draw(L);}
    case 'M' : {draw(M);}
    case 'N' : {draw(N);}
    case 'O' : {draw(O);}
    case 'P' : {draw(P);}
    case 'Q' : {draw(Q);}
    case 'R' : {draw(R);}
    case 'S' : {draw(S);}
    case 'T' : {draw(T);}
    case 'U' : {draw(U);}
    case 'V' : {draw(V);}
    case 'W' : {draw(W);}
    case 'X' : {draw(X);}
    case 'Y' : {draw(Y);}
    case 'Z' : {draw(Z);}
    case 'a' : {draw(a);}
    case 'b' : {draw(b);}
    case 'c' : {draw(c);}
    case 'd' : {draw(d);}
    case 'e' : {draw(e);}
    case 'f' : {draw(f);}
    case 'g' : {draw(g);}
    case 'h' : {draw(h);}
    case 'i' : {draw(i);}
    case 'j' : {draw(j);}
    case 'k' : {draw(k);}
    case 'l' : {draw(l);}
    case 'm' : {draw(m);}
    case 'n' : {draw(n);}
    case 'o' : {draw(o);}
    case 'p' : {draw(p);}
    case 'q' : {draw(q);}
    case 'r' : {draw(r);}
    case 's' : {draw(s);}
    case 't' : {draw(t);}
    case 'u' : {draw(u);}
    case 'v' : {draw(v);}
    case 'w' : {draw(w);}
    case 'x' : {draw(x);}
    case 'y' : {draw(y);}
    case 'z' : {draw(z);}
    default : console.log("no letter"); break;
  }
}

function draw(letterArray){
  for(var x =0; x< piArray.length; x++){

        if(letterArray == 1){
          queueRequest(piArray[x], "type=red");
        }
        else{
          queueRequest(piArray[x], "type=blue");
        }

  }
}
//queueRequest('127.0.0.1', "type=red");
//queueRequest('127.0.0.1', "type=green");
//queueRequest('127.0.0.1', "type=blue");

//doRequest();

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

const A =
[
  011110,
  110011,
  110011,
  111111,
  110011,
  110011
]
const B =[
  111110,
  110011,
  111110,
  111110,
  110011,
  111110
]
const C =[
  011110,
  110011,
  110000,
  110000,
  110011,
  011110
]
const D =[
  111110,
  110011,
  110011,
  110011,
  110011,
  111110
]
const E =[
  111111,
  110000,
  111110,
  111110,
  110000,
  111111
]
const F =[
  111111,
  110000,
  111110,
  110000,
  110000,
  1100000
]
const G =[
  011110,
  110011,
  110000,
  110111,
  110011,
  011110
]
const H =[
  110011,
  110011,
  111111,
  111111,
  110011,
  110011
]
const I =[
  011110,
  001100,
  001100,
  001100,
  001100,
  011110
]
const J =[
  001111,
  000110,
  000110,
  110110,
  110110,
  011100
]
const K =[
  110011,
  110110,
  111100,
  111100,
  110110,
  110011
]
const L =[
  110000,
  110000,
  110000,
  110000,
  110000,
  111111
]
const M =[
  100001,
  110011,
  101101,
  110011,
  110011,
  110011,
  110011
]
const N =[
  110011,
  111011,
  111011,
  110111,
  110111,
  110011,
  110011
]
const O =[
  011110,
  110011,
  110011,
  110011,
  110011,
  011110
]
const P =[
  111110,
  110011,
  110011,
  111110,
  110000,
  110000
]
const Q =[
  011110,
  110011,
  110011,
  110111,
  011110,
  000011
]
const R =[
  111110,
  110011,
  110011,
  111100,
  110110,
  110011
]
const S =[
  011110,
  110011,
  111000,
  000111,
  110011,
  011110
]
const T =[
  111111,
  101101,
  001100,
  001100,
  001100,
  001100
]
const U =[
  110011,
  110011,
  110011,
  110011,
  110011,
  011111
]
const V =[
  110011,
  110011,
  110011,
  110011,
  011110,
  001100
]
const W =[
  110011,
  110011,
  110011,
  111111,
  110011,
  110011
]
const X =[
  110011,
  110011,
  011010,
  010110,
  110011,
  110011
]
const Y =[
  110011,
  110011,
  110011,
  011110,
  001100,
  001100
]
const Z =[
  111111,
  000011,
  000110,
  011000,
  110000,
  111111
]
const blank =[
  0000000,
  0000000,
  0000000,
  0000000,
  0000000,
  0000000
]
const a =[
  000000,
  011110,
  000011,
  011111,
  110011,
  011111
]
const b =[
  110000,
  110000,
  110000,
  111110,
  110011,
  111110
]
const c =[
  000000,
  011110,
  110011,
  110000,
  110011,
  011110
]
const d =[
  000011,
  000011,
  000011,
  011111,
  110011,
  011111
]
const e =[
  000000,
  011110,
  110011,
  111111,
  110000,
  011110
]
const f =[
  001110,
  011011,
  011000,
  111110,
  011000,
  011000
]
const g =[
  0111110,
  1100110,
  1100110,
  0111110,
  0000110,
  0111100
]
const h =[
  110000,
  110000,
  110000,
  111110,
  110011,
  110011
]
const i =[
  001100,
  000000,
  001100,
  001100,
  001100,
  011110
]
const j =[
  000110,
  000000,
  000110,
  000110,
  110110,
  011100
]
const k =[
  110000,
  110000,
  110011,
  110110,
  110110,
  110011
]
const l =[
  001100,
  001100,
  001100,
  001100,
  001100,
  001100
]
const m =[
  000000,
  110011,
  111111,
  111111,
  110011,
  110011
]
const n =[

  000000,
  111110,
  111111,
  110011,
  110011,
  110011
]
const o =[
  000000,
  011110,
  110011,
  110011,
  110011,
  011110
]
const p =[
  111110,
  110011,
  110011,
  111110,
  110000,
  110000
]
const q =[
  111100,
  101100,
  101100,
  111100,
  001101,
  001111
]
const r =[
  000000,
  111110,
  110011,
  110011,
  110000,
  110000
]
const s =[
  000000,
  011111,
  100000,
  011110,
  000001,
  111110
]
const t =[
  001100,
  001100,
  111111,
  001100,
  001100,
  001100
]
const u =[
  000000,
  110011,
  110011,
  110011,
  110011,
  011111
]
const v = [
  000000,
  000000,
  110011,
  110011,
  011110,
  001100
]
const w = [
  100001,
  100001,
  101101,
  101101,
  011110
]
const x =[
  000000,
  110011,
  011110,
  001100,
  011110,
  110011
]
const y =[
  000000,
  110011,
  110011,
  011111,
  000011,
  011110
]
const z =[
  000000,
  011110,
  000110,
  001100,
  011000,
  011110
]
