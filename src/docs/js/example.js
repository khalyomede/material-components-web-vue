const fs = require("fs");

const button = fs
	.readFileSync(__dirname + "/component/example/MdcButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

export default { button };
