import {src, dest, watch, series, parallel} from "gulp";
import pug from "gulp-pug";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import browserify from "gulp-bro";
import rename from "gulp-rename";
import clean from "gulp-clean";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import babelify from "babelify";
import babel from "gulp-babel";
import vueCompiler from "gulp-vue-compiler";
import npmCheck from "gulp-npm-check";

const browser = browserSync.create();

const docsJs = () =>
	src("src/docs/js/index.js")
		.pipe(plumber())
		.pipe(
			browserify({
				transform: [
					[
						babelify.configure({
							presets: ["@babel/preset-env"],
							plugins: [
								"@babel/plugin-proposal-export-default-from",
							],
						}),
					],
					[
						"vueify-fork",
						{
							sass: {
								includePaths: ["node_modules"],
							},
						},
					],
					"envify",
					"brfs",
				],
				plugin: ["tinyify"],
			})
		)
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest("docs/js"))
		.pipe(dest("docs/material-components-web-vue/js"))
		.pipe(browser.stream());

const docsHtml = () =>
	src("src/docs/html/index.pug")
		.pipe(plumber())
		.pipe(pug())
		.pipe(dest("docs"))
		.pipe(browser.stream());

const docsCss = () =>
	src("src/docs/css/index.sass")
		.pipe(plumber())
		.pipe(
			sass({
				includePaths: ["node_modules"],
			})
		)
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest("docs/css"))
		.pipe(dest("docs/material-components-web-vue/css"))
		.pipe(browser.stream());

const libCss = () =>
	src("src/css/*.sass")
		.pipe(plumber())
		.pipe(dest("lib/css"))
		.pipe(browser.stream());

const libVue = () =>
	src("src/js/**/*.vue")
		.pipe(plumber())
		.pipe(vueCompiler())
		.pipe(
			rename({
				extname: ".js",
			})
		)
		.pipe(dest("lib/js"))
		.pipe(browser.stream());

const libJs = () =>
	src("src/js/**/*.js")
		.pipe(plumber())
		.pipe(babel())
		.pipe(dest("lib/js"))
		.pipe(browser.stream());

const clearDocs = () =>
	src("docs", {allowEmpty: true})
		.pipe(plumber())
		.pipe(clean());

const clearLib = () =>
	src("lib", {allowEmpty: true})
		.pipe(plumber())
		.pipe(clean());

const reload = done => {
	browser.reload();

	done();
};

const checkDependencies = done => npmCheck(done);

const build = parallel(
	series(
		clearDocs,
		clearLib,
		parallel(libCss, series(libVue, libJs)),
		parallel(docsJs, docsHtml, docsCss)
	),
	checkDependencies
);

const start = () => {
	browser.init({
		server: {
			baseDir: "docs",
		},
	});

	watch("src/js/**/*.{vue,js}", series(libVue, libJs, docsJs, reload));
	watch("src/docs/js/**/*.{vue,js}", series(docsJs, reload));
	watch("src/css/**/*.sass", series(libCss, docsCss, reload));
	watch("src/docs/css/**/*.sass", series(docsCss, reload));
	watch("src/docs/html/**/*.pug", series(docsHtml, reload));
};

export {start, build};
