const fs = require("fs");

const button = fs.readFileSync(__dirname + "/button.html").toString();
const raised = fs.readFileSync(__dirname + "/raised.html").toString();
const unelevated = fs.readFileSync(__dirname + "/unelevated.html").toString();

export default {
	button,
	raised,
	unelevated
};
