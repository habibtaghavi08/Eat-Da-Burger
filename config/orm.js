var connection = require("./connection")
var orm ={
selectAll:function(tableName,cbModel){
connection.query("select * from ??", tableName,function(error,burgerData){
    cbModel(burgerData)
})
}
}

module.exports = orm