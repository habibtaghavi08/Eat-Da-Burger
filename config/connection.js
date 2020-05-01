var mysql=require("mysql")

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "habib",
    password:"password",
    database:"burgers_db"
})


connection.connect(function(){
    console.log("connection id ",connection.threadId)
})

module.exports = connection;