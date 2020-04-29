// importing the burger model
var burger_model = require("../models/buger_model")

function burger_controller(app) {
    // creates get request 
    app.get("/", function (req,res) {
        // selectAll functions gets all the burger names
        burger_model.selectAll(function (burgerData) {
        //  displ index.handlebars file for response
            res.render("index",{burgers:burgerData})

        })
    })

}

// exporting burger controller
module.exports = burger_controller