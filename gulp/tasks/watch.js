/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');

/* Watch these files for changes and run the task on update */
gulp.task('watch', ['watch-icons', 'watch-scss', 'watch-images', 'watch-scripts']);

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);
