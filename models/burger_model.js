// importing orm.js file to burger models
var orm = require("../config/orm")

var burger_model = {
    selectAll: function (cbController) {
        orm.selectAll("burgers", function (burgerData) {
            cbController(burgerData)
        })
    },
    // creating function to let orm into mysql aka Post request

    create: function (newBurger, cbController) {
        orm.create("burgers", ["burger_name", "devoured"], [newBurger, false],function(burgerData){
            cbController(burgerData)
        })
    },
  
    update:function(id,cbController){
       orm.update("burgers", ["devoured","id"],[true, id],function(burgerData){
           cbController(burgerData)
       })   
    }
   

}


module.exports = burger_model