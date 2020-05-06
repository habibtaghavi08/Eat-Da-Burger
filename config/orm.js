var connection = require("./connection")
var orm ={
selectAll:function(tableName,cbModel){
var statement=connection.query("select * from ??", tableName,function(error,burgerData){
    cbModel(burgerData)
})
console.log(statement.sql)
},
create:function(tableName,columns,values,cbModel){
 var statement = connection.query("insert into ?? (??,??) values (?,?)",[tableName, columns[0],columns[1],values[0],values[1]],function(err,burgerData){
     cbModel(burgerData)
 })

 console.log(statement.sql)
},
update:function(tableName,columns,values,cbModel){
    var statement = connection.query("update ?? set ?? = ? where ?? = ?",[tableName, columns[0],values[0],columns[1], values[1]],function(error,burgerData){
        cbModel(burgerData)
    })
    console.log(statement.sql)
}




}

module.exports = orm

