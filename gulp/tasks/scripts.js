/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

const SCRIPTS_SRC_HEADER = 'js/custom-header-scripts.js';
const SCRIPTS_SRC_FOOTER = 'js/custom-footer-scripts.js';
const SCRIPTS_DST = 'js/';

// Scripts
gulp.task('scripts', function () {
	// pour JS header
	return gulp.src(SCRIPTS_SRC_HEADER)
		.pipe(plumber(function (err) {
			console.log('Scripts Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename('custom-header-scripts.min.js'))
		.pipe(gulp.dest(SCRIPTS_DST));

	// pour JS footer
	return gulp.src(SCRIPTS_SRC_FOOTER)
		.pipe(plumber(function (err) {
			console.log('Scripts Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename('custom-footer-scripts.min.js'))
		.pipe(gulp.dest(SCRIPTS_DST));
});

gulp.task('watch-scripts', () => gulp.watch(SCRIPTS_SRC, ['scripts']));
