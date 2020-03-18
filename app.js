const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// let auth = require("./auth");

// let db = require("./models");
// let sessions = require("express-session");
// let cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(require("./routes/index"));
app.use(require("./routes/current"));
app.use(require("./routes/future"));
app.use(require("./routes/donate"));

app.get("/error", (req, res) => {
  res.send("error");
});

app.listen(3500, () => {
  console.log("Listening on 3500");
});
