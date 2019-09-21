const camelcase = require("camelcase");
const rtrim = require("rtrim");
const { readdirSync, readFileSync, writeFileSync } = require("fs");

let fileContent = "export default {";

readdirSync(__dirname + "/../src/docs/js/component/example").map(fileName => {
	const exampleName = camelcase(fileName.replace(/^Mdc|\.vue$/gm, ""));

	const code = readFileSync(__dirname + `/../src/docs/js/component/example/${fileName}`)
		.toString()
		.replace(/(from\s")(.*)(";$)/gm, "$1material-components-web-vue$3")
		.replace(/(@import\s")([./]+)(.*)/gm, "$1material-components-web-vue/$3");

	fileContent += `"${exampleName}": \`${code}\`,`;
});

fileContent = rtrim(fileContent, ",") + "};";

writeFileSync(__dirname + "/../src/docs/js/example.js", fileContent);
