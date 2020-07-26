//Require express
var express = require("express");

var router = express.Router();

// Import the model (car.js) to use its database functions.
var car = require("../models/car.js");

// Create all our routes and set up logic within those routes where required.
//GET route to get cars from database.
router.get("/", function(req, res) {
    car.all(function(data) {
        var hbsObject = {
            cars: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST route to create/add a car.
router.post("/api/cars", function(req, res) {
    car.create([
        "car_name", "sell"
    ], [
        req.body.car_name, req.body.sell
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

//PUT route to update car sell state.
router.put("/api/cars/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    car.update({
        sell: req.body.sell
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;