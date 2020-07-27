// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".sell").on("click", function(event) {
        var id = $(this).data("id");
        var newSell = $(this).data("newsell");

        var newSoldState = {
            sell: true
        };

        // Send the PUT request.
        $.ajax("/api/newCar/" + id, {
            type: "PUT",
            data: newSoldState
        }).then(
            function() {
                console.log("changed sold to", newSell);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newSell = {
            car_name: $("#ca").val().trim(),
            sell: $("[name=sell]:checked").val().trim()
        };
        console.log(newSell)
            // Send the POST request.
        $.ajax("/api/cars", {
            type: "POST",
            data: newSell
        }).then(
            function(data) {
                console.log(data)
                    // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});