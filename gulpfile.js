"use strict";

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint     = require('gulp-jshint'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  livereload = require('gulp-livereload');

gulp.task('html', function() {
  gulp.src('../*.html')
  .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src('src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('analyticpi/static/css/'))
  .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('analyticpi/static/js'))
    .pipe(livereload());
});

gulp.task('vendor-js', function() {
  return gulp.src([
    'src/vendor/js/jquery.min.js',
    'src/vendor/js/chart.js',
    'src/vendor/js/tookit.js',
    'src/vendor/js/tablesorter.min.js',
    'src/vendor/js/application.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('analyticpi/static/js/'))
});

gulp.task('vendor-css', function() {
  return gulp.src('src/vendor/css/*.css')
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('analyticpi/static/css/'))
});

gulp.task('copy-fonts', function() {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('analyticpi/static/fonts/'));
});

gulp.task('copy-img', function() {
  return gulp.src('src/img/**/*').pipe(gulp.dest('analyticpi/static/img/'));
});

//Watch task
gulp.task('default',function() {
  livereload.listen();
  gulp.watch('src/scss/**/*.scss',['css']);
  gulp.watch('src/js/**/*.js',['js']);
  gulp.watch('src/vendor/css/*.css',['vendor-css']);
  gulp.watch('src/vendor/js/*.js',['vendor-js']);
  gulp.watch('src/fonts/**/*',['copy-fonts']);
  gulp.watch('src/img/**/*.png',['copy-img']);
  gulp.watch('../*.html',['html']);
});
