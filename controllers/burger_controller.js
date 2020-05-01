// importing the burger model
var burger_model = require("../models/burger_model")

function burger_controller(app) {
    // creates get request to get data
    app.get("/", function (req,res) {
        // selectAll functions gets all the burger names
        burger_model.selectAll(function (burgerData) {
        //  display index.handlebars file for response
console.log(burgerData)
            res.render("index",{burgers:burgerData})

        })
    })
    // post request to add new burger data to MySql
    app.post("/api/burgers",function(req,res){
        var newBurger = req.body.burger_name
        burger_model.create(newBurger,function(burgerData){
             res.json(burgerData)
        })
    })

}

// exporting burger controller
module.exports = burger_controller