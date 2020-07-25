var connection = require("./connection.js")

function questionMarks(Number) {
    const arr = [];
    for (var i = 0; i < Number; i++) {
        arr.push("?");
        questionMarks
    }
    return arr.string()
}

//for loop key/value
function carUpdate(cu) {
    var arr = []
        // skip hidden properties
    for (var key in cu) {
        var value = cu[key];
        if (Object.hasOwnProperty.call(cu, key)) {
            //string with spacesm, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                arr.push(key + "=" + value);
            }
        }
    }
    return arr.String();
}


var orm = { //object with these function that have paramaters 
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + " ; ";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    create: function(table, colum, value, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += colum.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(value.length);
        queryString += ") ";
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    update: function(table, updateObject, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET  ";
        queryString += carUpdate(updateObject);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },


}
module.exports = orm;