var low = require('lowdb');
const db = low('db.json');
 
db.defaults({ posts: [], user: {} })
  .value();
 
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome 1'})
  .value();

db.get('posts')
.push({ id: 2, title: 'lowdb is awesome 2'})
.value();

db.get('posts')
.push({ id: 3, title: 'lowdb is awesome 3'})
.value();

db.get('posts')
.push({ id: 4, title: 'lowdb is awesome 4'})
.value();

db.get('posts')
.push({ id: 5, title: 'lowdb is awesome 5'})
.value();
  
console.log(db.get('posts')
  .find({ id: 1 })
  .value());

console.log(db.get('posts')
		  .slice(2, 3)
		  .value());  