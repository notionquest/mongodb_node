var pg = require('pg');
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';
var connectionString = "pg://postgres:password@localhost:5432/postgres";

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('Select count(*) from pg_shadow');

query.on('end', function(result) {
	console.log(JSON.stringify(result.rows, null, "    "));
	client.end();
});