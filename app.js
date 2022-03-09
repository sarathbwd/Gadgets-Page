const express = require("express");
const myApp = express();
myApp.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
myApp.listen(3000);
module.exports = myApp;
