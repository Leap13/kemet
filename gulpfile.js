const gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	zip = require('gulp-zip'),
	sass = require('gulp-sass')(require('sass')),
	rename = require('gulp-rename');


gulp.task('sass', function () {
	return gulp.src('./inc/kemet-panel/scss/kemet-panel.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./inc/kemet-panel/assets/css/unminified/kemet-panel.css'));
});

gulp.task('minify-panel', function () {
	return gulp.src('inc/kemet-panel/assets/css/unminified/*.css')
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('inc/kemet-panel/assets/css/minified'));
});

gulp.task('watch', function () {
	gulp.watch(['assets/css/**/*.css', 'assets/js/**/*.js']).on(
		'change',
		gulp.series(
			'uglify',
			'minify',
		)
	);
});

gulp.task('uglify', function () {
	return gulp.src('assets/js/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets/js'));
});

gulp.task('minify', function () {
	return gulp.src('assets/css/*.css')
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('release', function () {
	return gulp.src([
		'./**/*',
		'!./{node_modules,node_modules/**/*}',
		'!./vendor/**',
		'!./inc/kemet-panel/assets/js/{node_modules,node_modules/**/*}',
		'!./inc/kemet-panel/assets/js/src/**',
		'!./inc/kemet-panel/assets/js/build/index.asset.php',
		'!./inc/kemet-panel/assets/js/build/index.js.map',
		'!./inc/kemet-panel/assets/js/package.json',
		'!./inc/kemet-panel/assets/js/package-lock.json',
		'!./inc/blocks/react/{node_modules,node_modules/**/*}',
		'!./inc/blocks/react/src/**',
		'!./inc/blocks/react/build/index.asset.php',
		'!./inc/blocks/react/build/index.js.map',
		'!./inc/blocks/react/package.json',
		'!./inc/blocks/react/package-lock.json',
		'!./assets/{sass,sass/*}',
		'!./gulpfile.js',
		'!./package.json',
		'!./package-lock.json',
		'!./composer.json',
		'!./composer.lock',
		'!./postcss.config.js'
	])
		.pipe(zip('kemet.zip'))
		.pipe(gulp.dest('./'));
});

gulp.task(
	'default',
	gulp.series(
		'uglify',
		'minify'
	)
);
