const fs = require("fs");

const button = fs.readFileSync(__dirname + "/button.vue").toString();
const raised = fs.readFileSync(__dirname + "/raised.vue").toString();
const unelevated = fs.readFileSync(__dirname + "/unelevated.vue").toString();
const outlined = fs.readFileSync(__dirname + "/outlined.vue").toString();

export default {
	button,
	raised,
	unelevated,
	outlined
};
