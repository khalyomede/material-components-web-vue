import { src, dest, watch, series, parallel } from "gulp";
import pug from "gulp-pug";
import sass from "gulp-sass";
import tildeImporter from "node-sass-tilde-importer";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import browserify from "gulp-bro";
import rename from "gulp-rename";
import clean from "gulp-clean";
import plumber from "gulp-plumber";

const docsJs = () =>
	src("src/docs/js/index.js")
		.pipe(plumber())
		.pipe(
			browserify({
				transform: [["babelify", { presets: ["@babel/preset-env"] }], "vueify", "envify"],
				plugin: ["tinyify"]
			})
		)
		.pipe(
			rename({
				suffix: ".min"
			})
		)
		.pipe(dest("docs/js"))
		.pipe(dest("docs/material-design-components-vue/js"));

const docsHtml = () =>
	src("src/docs/index.pug")
		.pipe(plumber())
		.pipe(pug())
		.pipe(dest("docs"));

const docsCss = () =>
	src("src/docs/css/index.sass")
		.pipe(plumber())
		.pipe(
			sass({
				includePaths: ["node_modules"]
			})
		)
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(
			rename({
				suffix: ".min"
			})
		)
		.pipe(dest("docs/css"))
		.pipe(dest("docs/material-design-components-vue/css"));

const libCss = () =>
	src("src/css/*.sass")
		.pipe(plumber())
		.pipe(dest("lib/css"));

const libJs = () =>
	src("src/js/**/*.{vue,js}")
		.pipe(plumber())
		.pipe(dest("lib/js"));

const clearDocs = () =>
	src("docs", { allowEmpty: true })
		.pipe(plumber())
		.pipe(clean());

const clearLib = () =>
	src("lib", { allowEmpty: true })
		.pipe(plumber())
		.pipe(clean());

const build = series(clearDocs, clearLib, parallel(libCss, libJs), parallel(docsJs, docsHtml, docsCss));

export { build };
