'use strict';

var feathers = require('feathers');
var rest = require('feathers-rest');
var bodyParser = require('body-parser');

class MessageService {
  constructor() {
    this.messages = [];
  }

  find(params) {
    return Promise.resolve(this.messages);
  }

  create(data, params) {
    this.messages.push(data);

    return Promise.resolve(data);
  }
}

const app = feathers()
  // Enable the REST provider
  .configure(rest())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', new MessageService());

app.use('/getmessage', new MessageService());

// Log newly created messages on the server
app.service('messages').on('created', message => 
  console.log('Created message', message)
);

app.service('getmessage').on('find', message =>
	console.log('get message ..')
);

console.log('Server started');
app.listen(3030);