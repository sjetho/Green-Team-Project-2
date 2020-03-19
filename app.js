const express = require("express");
const app = express();
// var io = require('socket.io')();

// const bodyParser = require("body-parser");
// let auth = require("./auth");

// let db = require("./models/data.js");
// let sessions = require("express-session");
// let cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(require("./routes/index"));
app.use(require("./routes/current"));
app.use(require("./routes/future"));
app.use(require("./routes/donate"));

// app.get("/error", (req, res) => {
//   res.send("error");
// });


// io.attach(server);
// io.on('connection', function (socket) {
//   socket.on('postMessage', function (data) {
//     io.emit('updateMessages', data);
//   });
// });



app.listen(3500, () => {
  console.log("Listening on 3500");
});
