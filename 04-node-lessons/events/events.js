var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connected Sucsess');
    eventEmitter.emit('data_recevied');
}    

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_recevied', function(){
     console.log('数据接收成功');
    });

eventEmitter.emit('connection');
console.log("End");

