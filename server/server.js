var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');

var Sequelize = require('sequelize')
    , sequelize = new Sequelize('pinnacle', 'postgres', 'postgres', {
        dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
        port:    5432
    });

var app = express();
app.use(cors());
app.use(bodyParser.json());
console.log('getting something');


sequelize
    .authenticate()
    .complete(function(err) {
        if (err) {
            console.log('Unable to connect to the database:', err)
        } else {
            console.log('Connection has been established successfully.')
        }
    });



//var User = sequelize.define('User', {
//    id: Sequelize.INTEGER,
//    firstname: Sequelize.STRING,
//    lastname: Sequelize.STRING,
//    position: Sequelize.STRING,
//    hiredate: Sequelize.DATE
//}, {
//    tableName: 'users', // this will define the table's name
//    timestamps: false           // this will deactivate the timestamp columns
//});
//
//User
//    .create({
//        id: 10,
//        firstname: 'bob',
//        lastname: 'builder',
//        position: 'inside sales',
//        hiredate: 2013-01-01
//    })
//    .complete(function(err, user) {
//        console.log(err);
//        /* ... */
//    });

var Order = sequelize.define('orders', {
//    id: Sequelize.INTEGER,
    order_date: Sequelize.DATE,
    user_id: Sequelize.STRING,
    manufacturer: Sequelize.STRING,
    distributor: Sequelize.STRING,
    amount: Sequelize.STRING,
    po_number: Sequelize.STRING
}, {
    tableName: 'orders', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
});

//sequelize
//    .sync({ force: true })
//    .complete(function(err) {
//        if (err) {
//            console.log('An error occurred while creating the table:', err)
//        } else {
//            console.log('It worked!')
//        }
//    })

//sequelize.query("SELECT * FROM orders").success(function(myTableRows) {
//    console.log(myTableRows)
//});

app.get('/orders', function(req, res) {
    sequelize.query("SELECT * FROM orders").success(function(myTableRows) {
        res.json(myTableRows);
    })
});


app.post('/orders', function(req,res) {
    console.log("here")
    var order = req.body.order;
    console.log(order)
    Order.create({
//        id: 22,
        user_id: 4,
//        order_date: '2014-SEP-29',
        manufacturer: order.manufacturer,
        distributor: order.distributor,
        amount: order.amount,
        po_number: order.poNumber
    })
    .complete(function(err, user) {
        console.log(err);
        /* ... */
    });
    res.json(order);
});



app.listen(3000);


