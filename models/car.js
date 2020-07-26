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
    create: function(colum, values, cb) {
        orm.create("cars", colum, values, function(res) {
            cb(res);
        });
    },

    //update function 
    update: function(updateObject, condition, cb) {
        orm.update("cars", updateObject, condition, function(res) {
            cb(res)
        })
    }
};

//move to cars controller
module.exports = car;