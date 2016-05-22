'use strict';
 
const gulp = require('gulp'),
	  sass = require('gulp-sass');
 
gulp.task('css', function () {
  return gulp.src('public/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});