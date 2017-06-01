var gulp   = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass   = require('gulp-sass');

/* jshint task would be here */


gulp.task('build-css-1', function() {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'));
});
gulp.task('build-css-2', function() {
    return gulp.src('assets/sass/reset.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'));
});
gulp.task('default', ['build-css-1','build-css-2']);

/* updated watch task to include sass */

gulp.task('watch', function() {
    gulp.watch(['build-css-1','build-css-2']);
});
