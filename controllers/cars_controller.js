//controller setup import express 
var express = require("express");
var router = express.Router();

var car = require("../models/car.js");

//routes and set up begins/ logic 
//GET route to get cars from db.
router.get("/", function(req, res) {
    car.all(function(data) {
        var carObject = {
            cars: data
        };
        console.log(carObject);
        res.render("index", carObject);
    });
});

//POST route to create/add a car.
router.post("/api/cars", function(req, res) {
    car.create([
        "car_name", "sell"
    ], [
        req.body.car_name, req.body.sell
    ], function(result) {
        //send back ID to the new quote
        res.json({ id: result.insertID })
    });
});

//PUT route to update car sold state.
router.put("/api/cars/:id", function(req, res) {
    var conditon = "id = " + req.params.id;

    console.log("condition", conditon);

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
// export routes for server.js
module.export = router;