/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const ICONS_SRC = 'icons/*.svg';
const ICONS_DST = 'fonts/';

gulp.task('icons', () => {
    return gulp.src(ICONS_SRC)
        .pipe(iconfontCss({
            fontName: 'font-icons',
            targetPath: '../scss/modules/_font-icons.scss'
        }))
        .pipe(iconfont({
            fontName: 'font-icons',
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true, // Apply same height to each svg
            timestamp: Math.round(Date.now() / 1000)
        }))
        .pipe(gulp.dest(ICONS_DST));
});

gulp.task('watch-icons', () => gulp.watch(ICONS_SRC, ['icons', 'scss']));
