/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => del('public/**/*'));
