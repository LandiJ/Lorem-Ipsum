const express = require("express");
const app = express();

var loremIpsum = require("lorem-ipsum"),
  output = loremIpsum({
    count: 3,
    units: "paragraphs",
    random: Math.random,
    format: "html"
  });

app.get("/lorem", function(req, res) {
  res.send(output);
});

app.listen(3000, function() {
  // two parameters Port Number and Host Name
  console.log("Successfully started express app!");
});
