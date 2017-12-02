var http = require('http');

const A =[
  '011110',
  '110011',
  '110011',
  '111111',
  '110011',
  '110011'
]
const B =[
 '11110',
 '10011',
 '11110',
 '11110',
 '10011',
 '11110'
]
const C =[
 '11110',
 '10011',
 '10000',
 '10000',
 '10011',
 '11110'
]
const D =[
 '11110',
 '10011',
 '10011',
 '10011',
 '10011',
 '11110'
]
const E =[
 '11111',
 '10000',
 '11110',
 '11110',
 '10000',
 '11111'
]
const F =[
 '11111',
 '10000',
 '11110',
 '10000',
 '10000',
 '100000'
]
const G =[
 '11110',
 '10011',
 '10000',
 '10111',
 '10011',
 '11110'
]
const H =[
 '10011',
 '10011',
 '11111',
 '11111',
 '10011',
 '10011'
]
const I =[
 '11110',
 '01100',
 '01100',
 '01100',
 '01100',
 '11110'
]
const J =[
 '01111',
 '00110',
 '00110',
 '10110',
 '10110',
 '11100'
]
const K =[
 '10011',
 '10110',
 '11100',
 '11100',
 '10110',
 '10011'
]
const L =[
 '10000',
 '10000',
 '10000',
 '10000',
 '10000',
 '11111'
]
const M =[
 '00001',
 '10011',
 '01101',
 '10011',
 '10011',
 '10011',
 '10011'
]
const N =[
 '10011',
 '11011',
 '11011',
 '10111',
 '10111',
 '10011',
 '10011'
]
const O =[
 '11110',
 '10011',
 '10011',
 '10011',
 '10011',
 '11110'
]
const P =[
 '11110',
 '10011',
 '10011',
 '11110',
 '10000',
 '10000'
]
const Q =[
 '11110',
 '10011',
 '10011',
 '10111',
 '11110',
 '00011'
]
const R =[
 '11110',
 '10011',
 '10011',
 '11100',
 '10110',
 '10011'
]
const S =[
 '11110',
 '10011',
 '11000',
 '00111',
 '10011',
 '11110'
]
const T =[
 '11111',
 '01101',
 '01100',
 '01100',
 '01100',
 '01100'
]
const U =[
 '10011',
 '10011',
 '10011',
 '10011',
 '10011',
 '11111'
]
const V =[
 '10011',
 '10011',
 '10011',
 '10011',
 '11110',
 '01100'
]
const W =[
 '10011',
 '10011',
 '10011',
 '11111',
 '10011',
 '10011'
]
const X =[
 '10011',
 '10011',
 '11010',
 '10110',
 '10011',
 '10011'
]
const Y =[
 '10011',
 '10011',
 '10011',
 '11110',
 '01100',
 '01100'
]
const Z =[
 '11111',
 '00011',
 '00110',
 '11000',
 '10000',
 '11111'
]
const blank =[
 '000000',
 '000000',
 '000000',
 '000000',
 '000000',
 '000000'
]
const a =[
 '00000',
 '11110',
 '00011',
 '11111',
 '10011',
 '11111'
]
const b =[
 '10000',
 '10000',
 '10000',
 '11110',
 '10011',
 '11110'
]
const c =[
 '00000',
 '11110',
 '10011',
 '10000',
 '10011',
 '11110'
]
const d =[
 '00011',
 '00011',
 '00011',
 '11111',
 '10011',
 '11111'
]
const e =[
 '00000',
 '11110',
 '10011',
 '11111',
 '10000',
 '11110'
]
const f =[
 '01110',
 '11011',
 '11000',
 '11110',
 '11000',
 '11000'
]
const g =[
 '111110',
 '100110',
 '100110',
 '111110',
 '000110',
 '111100'
]
const h =[
 '10000',
 '10000',
 '10000',
 '11110',
 '10011',
 '10011'
]
const i =[
 '01100',
 '00000',
 '01100',
 '01100',
 '01100',
 '11110'
]
const j =[
 '00110',
 '00000',
 '00110',
 '00110',
 '10110',
 '11100'
]
const k =[
 '10000',
 '10000',
 '10011',
 '10110',
 '10110',
 '10011'
]
const l =[
 '01100',
 '01100',
 '01100',
 '01100',
 '01100',
 '01100'
]
const m =[
 '00000',
 '10011',
 '11111',
 '11111',
 '10011',
 '10011'
]
const n =[

 '00000',
 '11110',
 '11111',
 '10011',
 '10011',
 '10011'
]
const o =[
 '00000',
 '11110',
 '10011',
 '10011',
 '10011',
 '11110'
]
const p =[
 '11110',
 '10011',
 '10011',
 '11110',
 '10000',
 '10000'
]
const q =[
 '11100',
 '01100',
 '01100',
 '11100',
 '01101',
 '01111'
]
const r =[
 '00000',
 '11110',
 '10011',
 '10011',
 '10000',
 '10000'
]
const s =[
 '00000',
 '11111',
 '00000',
 '11110',
 '00001',
 '11110'
]
const t =[
 '01100',
 '01100',
 '11111',
 '01100',
 '01100',
 '01100'
]
const u =[
 '00000',
 '10011',
 '10011',
 '10011',
 '10011',
 '11111'
]
const v = [
 '00000',
 '00000',
 '10011',
 '10011',
 '11110',
 '01100'
]
const w = [
 '00001',
 '00001',
 '01101',
 '01101',
 '11110'
]
const x =[
 '00000',
 '10011',
 '11110',
 '01100',
 '11110',
 '10011'
]
const y =[
 '00000',
 '10011',
 '10011',
 '11111',
 '00011',
 '11110'
]
const z =[
 '00000',
 '11110',
 '00110',
 '01100',
 '11000',
 '11110'
]



var queue = [];
var current =0;
var delay =0.5;




piArray = [
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
  '127.0.0.1', '127.0.0.1','127.0.0.1', '127.0.0.1', '127.0.0.1', '127.0.0.1',
]



var currentLetter =0;
var currentPhrase;

drawString('test');
function drawString(phrase){
  currentPhrase = phrase;
    drawLetterNow();



}

function drawLetterNow(){
console.log(currentPhrase[currentLetter])
  drawLetter(currentPhrase[currentLetter]);
  if(currentLetter < currentPhrase.length-1){
    currentLetter++;
    setTimeout(drawLetterNow, 1000);

  }
}



function drawLetter(letter) {
  switch(letter){
    case 'A' : {draw(A);break;}
    case 'B' : {draw(B);break;}
    case 'C' : {draw(C);break;}
    case 'D' : {draw(D);break;}
    case 'E' : {draw(E);break;}
    case 'F' : {draw(F);break;}
    case 'G' : {draw(G);break;}
    case 'H' : {draw(H);break;}
    case 'I' : {draw(I);break;}
    case 'J' : {draw(J);break;}
    case 'K' : {draw(K);break;}
    case 'L' : {draw(L);break;}
    case 'M' : {draw(M);break;}
    case 'N' : {draw(N);break;}
    case 'O' : {draw(O);break;}
    case 'P' : {draw(P);break;}
    case 'Q' : {draw(Q);break;}
    case 'R' : {draw(R);break;}
    case 'S' : {draw(S);break;}
    case 'T' : {draw(T);break;}
    case 'U' : {draw(U);break;}
    case 'V' : {draw(V);break;}
    case 'W' : {draw(W);break;}
    case 'X' : {draw(X);break;}
    case 'Y' : {draw(Y);break;}
    case 'Z' : {draw(Z);break;}
    case 'a' : {draw(a);break;}
    case 'b' : {draw(b);break;}
    case 'c' : {draw(c);break;}
    case 'd' : {draw(d);break;}
    case 'e' : {draw(e);break;}
    case 'f' : {draw(f);break;}
    case 'g' : {draw(g);break;}
    case 'h' : {draw(h);break;}
    case 'i' : {draw(i);break;}
    case 'j' : {draw(j);break;}
    case 'k' : {draw(k);break;}
    case 'l' : {draw(l);break;}
    case 'm' : {draw(m);break;}
    case 'n' : {draw(n);break;}
    case 'o' : {draw(o);break;}
    case 'p' : {draw(p);break;}
    case 'q' : {draw(q);break;}
    case 'r' : {draw(r);break;}
    case 's' : {draw(s);break;}
    case 't' : {draw(t);break;}
    case 'u' : {draw(u);break;}
    case 'v' : {draw(v);break;}
    case 'w' : {draw(w);break;}
    case 'x' : {draw(x);break;}
    case 'y' : {draw(y);break;}
    case 'z' : {draw(z);break;}
    default : console.log("no letter"); break;
  }
}

function draw(letterArray){

  for(var x =0; x< letterArray.length; x++){

      for(var y =0; y< letterArray[x].length; y++){
        console.log(letterArray[x][y])
        if(letterArray[x][y] =='1'){
          queueRequest(piArray[x+y], "type=red");
          console.log("drawed")
        }
        else{
          queueRequest(piArray[x+y], "type=blue");
          console.log("didny")
        }
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
      setTimeout(doRequest, delay *1000);
    }
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
