// creating on click for adding burger button 

$("#addBurger").on("click", function () {
    // take input text box and store into burgerName property of newBurger object 
    var newBurger = {
        burger_name: $("#burgerName").val()
    }

    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: newBurger  //new burger will stored req.body
    }).then(function (data) {

        // location.reload is to reload the page after click the button

        location.reload()



    })
})