var knex = require('knex');

knex({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'postgres',
        password : 'postgres',
        database : 'testdb',
        charset  : 'utf8'
    },
    debug: true
});
