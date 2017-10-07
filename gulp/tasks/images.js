/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminSvgo = require('imagemin-svgo');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const IMAGES_SRC = 'images/**/*.{png,jpeg,jpg,svg,gif}';
const IMAGES_DST = 'images/';

gulp.task('images', () => {
	return gulp.src(IMAGES_SRC)
		.pipe(imagemin(
			[
				imageminGifsicle(),
				imageminJpegtran(),
				imageminSvgo(),
				imageminPngquant(),
				imageminJpegRecompress()
			]
		))
		.pipe(gulp.dest(IMAGES_DST));
});

gulp.task('watch-images', () => gulp.watch(IMAGES_SRC, ['images']));
