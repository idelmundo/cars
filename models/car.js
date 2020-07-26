//import orm, create function that will connect with db.
var orm = require("../config/orm.js")

var car = {
    //Select all cars from database.
    selectAll: function(cb) {
        orm.selectAll("cars", function(res) {
            cb(res);
        });
    },

    //create function to add a car
    insertOne: function(cols, vals, cb) {
        orm.insertOne("cars", cols, vals, function(res) {
            cb(res);
        });
    },

    //update function 
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("cars", objColVals, condition, function(res) {
            cb(res)
        });
    }
};

//move to cars controller
module.exports = car;