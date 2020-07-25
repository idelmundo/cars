var connection = require("./connection.js")

function name(quanNumber) {
    const arr = [];
    for (var i = 0; i < Number; i++) {
        arr.push("?");
    }
    return arr.string()
}

function(quanNumber2) {
    //keys of value of what we get
}


var orm = { //object with these function that have paramaters 
    all: function(tableInput, x) {
        var queryString = "SELECT * FROM " + tableInput + " ; ";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            x(result);
            console.log(result);
        });
    },
    create: function(table, colum, value, x) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += colum.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += //functionName(value.length);
            queryString += ") ";
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            x(result);
            console.log(result);
        });
    },
    update: function(table, updateObject, condition, x) {
        var queryString = "UPDATE " + table;
        queryString += " SET  ";
        queryString += //functionName2(updateObject);
            queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            x(result);
            console.log(result);
        });
    },


}
module.exports = orm;