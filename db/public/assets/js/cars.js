// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //Click event for adding a car.
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //Grab car name from form field.
        //When user submits car name, set sell state to false.
        var newCar = {
            car_name: $("#carToGo").val().trim(),
            sell: 0
        };

        // Send the POST request using ajax.
        $.ajax("/api/cars", {
            type: "POST",
            data: newCar
        }).then(
            function() {
                console.log("created new car");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //Click event for "sell me" button.
    $(".change-sell").on("click", function(event) {
        var id = $(this).data("id");
        var newSell = $(this).data("newsell");

        var newSellState = {
            sell: "true"
        };

        // Send the PUT request using ajax.
        $.ajax("/api/cars/" + id, {
            type: "PUT",
            data: newSellState
        }).then(
            function() {
                console.log("changed sell to", newSell);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});