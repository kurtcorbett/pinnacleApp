var knex = require('knex')({
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

var express = require("express");
//var Bookshelf = require('bookshelf')(knex);

var app = express();



//var user = Bookshelf.Model({
//    tableName : "users"
//});
//
//var users = Bookshelf.Collection({
//    model : user
//});

app.get('/', function(req,res) {

    knex.select('*').from('users').then(function(users) {
        console.log(users);
        res.json(users);
    });
});

app.post('')

app.listen(3000);



