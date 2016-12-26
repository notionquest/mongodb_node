var express = require("express");
var router = express.Router();

var controllers = require("../controllers/index");

router.get("/", controllers.index);
router.get("/login", controllers.login);
router.post("/login", controllers.process);
router.get("/reset", controllers.reset);
router.get("/whoops", controllers.whoops);

module.exports = router;

/*module.exports.controller = function() {
	console.log("set the urls ......");
	app.get("/", controllers.index);
	app.get("/login", controllers.login);
	app.post("/login", controllers.process);
	app.get("/reset", controllers.reset);
	app.get("/whoops", controllers.whoops);
};
*/
/*module.exports = {
 all : function(req, res) {
 console.log("redirect..............");
 app.get("/", controllers.index);
 }
 };*/