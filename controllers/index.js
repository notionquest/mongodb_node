exports.index = function(request, response) {
	console.log("controller index .........");
	response.send("get slash request success");
    //response.render("index", {layout: "layout", title: "Index", cookie: JSON.stringify(request.cookies), session: JSON.stringify(request.session)});
};

exports.login = function(request, response) {
	response.send("login success");
    //response.render("login", {layout: "layout", title: "Login", cookie: JSON.stringify(request.cookies), session: JSON.stringify(request.session)});
};

exports.process = function(request, response) {
	response.send("process success");
    //response.render("process", {layout: "layout", title: "Process", username: request.body.username});
};

exports.reset = function(request, response) {
	response.send("reset success");
    //response.render("reset", {layout: "layout", title: "Reset"});
};

exports.whoops = function(request, response) {
	response.send("whoops success");
    //response.render("whoops", {layout: "layout", title: "Whoops"});
};
