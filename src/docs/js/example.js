const fs = require("fs");

const button = fs
	.readFileSync(__dirname + "/component/example/MdcButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const raisedButton = fs
	.readFileSync(__dirname + "/component/example/MdcRaisedButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const unelevatedButton = fs
	.readFileSync(__dirname + "/component/example/MdcUnelevatedButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const outlinedButton = fs
	.readFileSync(__dirname + "/component/example/MdcOutlinedButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const disabledButton = fs
	.readFileSync(__dirname + "/component/example/MdcDisabledButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const denseButton = fs
	.readFileSync(__dirname + "/component/example/MdcDenseButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const iconButton = fs
	.readFileSync(__dirname + "/component/example/MdcIconButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

const trailingIconButton = fs
	.readFileSync(__dirname + "/component/example/MdcTrailingIconButton.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");


const buttonWithoutRipple = fs
	.readFileSync(__dirname + "/component/example/MdcButtonWithoutRipple.vue")
	.toString()
	.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
	.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

export default {
	button,
	raisedButton,
	unelevatedButton,
	outlinedButton,
	disabledButton,
	denseButton,
	iconButton,
	trailingIconButton,
	buttonWithoutRipple
};
