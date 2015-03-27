var mapAsync =  require('./map_async');

var messages = ['message 1', 'message 2', 'message 3'];

index = 0;

mapAsync(messages, send, done);

function done(err, results) {
	if(err) {
		console.error(err);
	}
	else{
		console.log('all messages sent, results: ', results);
	}
}

function send(message, cb){
	var err = Math.random() > 0.8 ? new Error("i am error") : null;
	var result = ++ index;
	setTimeout(cb, randomTimeout(), err, index);
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}