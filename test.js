var x = new Set();

x.add(7)
x.add(4)
x.add(1)
x.add(5)
var y = new Array()
y.push(1);
y.push(2);
const uuidv4 = require('uuid');
// console.log(uuidv4.v1())

x.add(uuidv4.v4())
x.add(uuidv4.v4())
x.add(uuidv4.v4())
console.log(x)
x =new Set ((Array.from(x)).sort());
console.log(x)
function getSize(map) {
    let i = 0;
    for(m of map){
        i++;
    }
    return i;
}

console.log(Number.parseInt('1'))
// const redis = require("redis");
// const client = redis.createClient();
// const id = uuidv4.v4();
// const WebSocket = require('ws');
// const wsInstance = WebSocket.Server({port: 3002});
//   // setupWsHeartbeat(wsInstance);
// var check = require('./heartbeat.js')
// // check.createWebSocketConnection('ws://localhost:3001/w3wd33');
// let rr = (await getSet(client, 'Servers')).sort();
// var l = new check(client, id, rr);
// l.setupWsHeartbeat(wsInstance, l)

// setTimeout(function() {
//     // var pong = require('./pong')
//     // pong('ws://localhost:3002/w3wd3www');
//     // check.deleteClient();
// },10000);

// var getSet = (cl,key)=>{
//     return new Promise(function(resolve,reject){
//       cl.smembers(key,function(err,reply){
//         if(err){
//           reject(err)
//         }
//         else if(reply){
//           resolve(reply)
//         }
//         else {
//           reject('Invalid or Expired Key ',key)
//         }
//       })
//     })
// }