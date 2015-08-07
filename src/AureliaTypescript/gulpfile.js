/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var notify = require('gulp-notify');

gulp.task('copy-typings', function () {
    return gulp.src('wwwroot/jspm_packages/**/*.d.ts')
    .pipe(gulp.dest('scripts/typings/jspm_packages/'));
});

