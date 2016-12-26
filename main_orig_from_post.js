
var express  = require("express");
var partials = require("express-partials");
var cookies  = require("cookie-parser");
var session  = require("express-session");
var uuid     = require("node-uuid");
var parser   = require("body-parser");
var csrf     = require("csurf");
var compress = require("express-html-minify");

var logger   = require("./controllers/logger");
var errors   = require("./controllers/errors");
var utility  = require("./controllers/utility");

var routes   = require("./routes");

var app  = new express();
var port = 80;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", {defaultLayout: "layout"});

app.use(express.static(__dirname + "/public"));

app.use(logger.log);
app.use(partials());
app.use(cookies());
app.use(session({secret: uuid.v1(), resave: true, saveUninitialized: true}));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(csrf());
app.use(utility.csrf);
app.use(compress);
app.use(routes.controller);

app.use(errors.error);
app.use(errors.notfound);

app.listen(port);
console.log("app listening on port " + port);