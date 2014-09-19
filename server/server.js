var express = require("express");

var Sequelize = require('sequelize')
    , sequelize = new Sequelize('pinnacle', 'postgres', 'postgres', {
        dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
        port:    5432
    });

var app = express();
console.log('getting something');


sequelize
    .authenticate()
    .complete(function(err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        } else {
            console.log('Connection has been established successfully.')
        }
    });

sequelize
    .sync({ force: true })
    .complete(function(err) {
        if (!!err) {
            console.log('An error occurred while creating the table:', err)
        } else {
            console.log('It worked!')
        }
    });

var User = sequelize.define('User', {
    id: Sequelize.INTEGER,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    position: Sequelize.STRING,
    hiredate: Sequelize.DATE
}, {
    tableName: 'users', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
});


app.post('/createUser', function (req,res) {

        User
            .create({
                id: 10,
                firstname: 'bob',
                lastname: 'builder',
                position: 'inside sales',
                hiredate: 2013-01-01
            })
            .complete(function(err, user) {
                console.log(err);
                /* ... */
            });

    }
);


sequelize.query("SELECT * FROM users").success(function(myTableRows) {
    console.log(myTableRows)
});





app.listen(3000);


