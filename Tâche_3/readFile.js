var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Le contenu de « welcome.txt » est " + data.toString());
});