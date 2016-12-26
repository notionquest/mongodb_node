const monk = require('monk')

// Connection URL using user name and password - SCRAM-SHA-1
const url = 'admin:password@localhost:27017/myDb';

MONGODB-CR

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server');
})

const collection = db.get('testtst');

collection.find({}).then((docs) => {
  console.log('All docs ====>' + JSON.stringify(docs));
});

