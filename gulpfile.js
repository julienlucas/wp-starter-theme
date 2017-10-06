var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

// Image compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

// Font icons
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

// File paths
var DIST_PATH = '';
var IMAGES_PATH = 'images/**/*.{png,jpeg,jpg,svg,gif}';
var SCRIPTS_PATH = 'js/custom-functions.js';
var SCSS_PATH = 'scss/styles.scss';
var ICONS_PATH = 'icons/*.{svg}';

// Styles SCSS
gulp.task('styles', function () {
	console.log('starting SCSS styles task');
	return gulp.src([SCSS_PATH])
		.pipe(plumber(function (err) {
			console.log('Styles Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH));
});

// Scripts
gulp.task('scripts', function () {
	console.log('starting scripts task');
	return gulp.src(SCRIPTS_PATH)
		.pipe(plumber(function (err) {
			console.log('Scripts Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2016']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH + '/js'));
});

// Images
gulp.task('images', function () {
	return gulp.src(IMAGES_PATH)
		.pipe(imagemin(
			[
				imagemin.gifsicle(),
				imagemin.jpegtran(),
				imagemin.optipng(),
				imagemin.svgo(),
				imageminPngquant(),
				imageminJpegRecompress()
			]
		))
		.pipe(gulp.dest(DIST_PATH + '/images'));
});

// Watch
gulp.task('watch', ['default'], function () {
	console.log('Starting watch task');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch('/scss/**/*.scss', ['styles']);
});

/* Font icons */
var absoluteTargetSCSSPath = path.resolve(__dirname, '../../', `${SRC.DECOUPE_SASS}/modules/_icons.scss`);

gulp.task('icons', () => {
		return gulp.src(ICONS_PATH)
        .pipe(iconfontCss({
            fontName: 'icons',
            targetPath: absoluteTargetSCSSPath,
            fontPath: '/fonts'
        }))
        .pipe(iconfont({
            fontName: 'icons',
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true, // Apply same height to each svg
            timestamp: Math.round(Date.now() / 1000)
        }))
        .pipe(gulp.dest(DIST_PATH + '/fonts'));
});

// Default
gulp.task('default', ['styles', 'scripts'], function () {
	console.log('Starting default task');
});
