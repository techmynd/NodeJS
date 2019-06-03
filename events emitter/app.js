const events = require('events');
const eventsEmitter = new events.EventEmitter();

// myClickListener is like addEventListener
eventsEmitter.on('myClickListener', function(buttonNumber){
  console.log(buttonNumber + " is clicked");
});

// do something and fire this emitter yourself and then capture this event above
eventsEmitter.emit('myClickListener', 'Button 1');
