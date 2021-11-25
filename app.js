const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/public/html/index.html");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
