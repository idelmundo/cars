//import orm, create function that will connect with db.
var orm = require("../config/orm.js")

var car = {
    //Select all cars from database.
    all: function(cb) {
        orm.all("cars", function(res) {
            cb(res);
        });
    },

    //create function to add a car
    create: function(cols, vals, cb) {
        orm.create("cars", cols, vals, function(res) {
            cb(res);
        });
    },

    //update function 
    update: function(objColVals, condition, cb) {
        orm.update("cars", objColVals, condition, function(res) {
            cb(res)
        });
    }
};

//move to cars controller
module.exports = car;