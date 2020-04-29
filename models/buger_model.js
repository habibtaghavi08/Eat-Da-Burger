// importing orm.js file to burger models
var orm =require("../config/orm")
 
var burger_model={
selectAll:function(cbController){
orm.selectAll("burgers",function(burgerData){
    cbController(burgerData)
})
}
}


module.exports = burger_model