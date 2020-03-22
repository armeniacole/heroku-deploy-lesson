const express = require("express");
const path = require('path');
const app = express();

// app.get("/", (req, res) => {
// //   res.send("<h1>Hello World!</h1>");
//     res.sendFile(path.resolve(__dirname(), 'public/index.html'));
// });
const PORT = process.env.PORT || 8080;


app.use("/", express.static("public"));

app.get("*", (req, res) => {
  res.status(404).send("Sorry, that web page doesn't exist 🤷🏻‍");
});

app.listen(PORT, () => {
  console.log("Hello World listening on port 8080.");
});
