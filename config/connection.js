 var mysql=require("mysql")

// var connection = mysql.createConnection({
//     host:"localhost",
//     port:3306,
//     user: "habib",
//     password:"password",
//     database:"burgers_db"
// })
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


connection.connect(function(){
    console.log("connection id ",connection.threadId)
})

module.exports = connection;

