/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-cssnano');
const beep = require('beepbeep');
const util = require('gulp-util');

const SCSS_SRC = 'scss/**/*.scss';
const SCSS_DST = '';

const minifyConfig = {
    safe: true,
    zindex: false,
    autoprefixer: {
        add: true,
        browsers: [
            'Edge 12',
            'Chrome 46',
            'Firefox ESR',
            'Safari 8',
            'Android 4.4',
            'ie 11',
            'iOS 8.1'
        ]
    }
};

if (util.env.production) {
    minifyConfig.discardComments = {
        removeAll: false
    };
}

/* Compile scss files*/
gulp.task('scss', () => {
    return gulp.src([SCSS_SRC])
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(minifycss(minifyConfig))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(SCSS_DST))
        .on('end', () => {
            beep();
        });
});

gulp.task('watch-scss', () => gulp.watch(SCSS_SRC, ['scss']));
