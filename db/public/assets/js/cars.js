// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".sell").on("click", function(event) {
        var id = $(this).data("id");
        var newSell = $(this).data("newSell");

        var newSoldState = {
            sell: true
        };

        // Send the PUT request.
        $.ajax("/api/cars/" + id, {
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

        var newCat = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function() {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});