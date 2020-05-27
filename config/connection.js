 var mysql=require("mysql")

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port:3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    })
    
}


connection.connect(function(){
    console.log("connection id ",connection.threadId)
})

module.exports = connection;

