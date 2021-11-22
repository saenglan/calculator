const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (request, response) {
  console.log(__dirname + "./html/index.html");
  response.sendFile(__dirname + "/public/html/index.html");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
