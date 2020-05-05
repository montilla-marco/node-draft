const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// register a event listener
eventEmitter.on('messageLogged', () => console.log('Event Shooted!!!'));
eventEmitter.emit('messageLogged');

eventEmitter.on('appStarted', (event) => console.log(event));
eventEmitter.emit('appStarted', { id: 1, url: 'http://' });