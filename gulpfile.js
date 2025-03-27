// SPDX-FileCopyrightText: Copyright (c) 2018 Yegor Bugayenko
// SPDX-License-Identifier: MIT

var gulp = require('gulp'),
    del = require('del'),
    run = require('gulp-run'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jasmine = require('gulp-jasmine-node');

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('compile', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    return gulp.src(['spec/**/*.js'])
        .pipe(jasmine({ timeout: 10000 }));
});

gulp.task('default', gulp.series('clean', 'compile', 'test'));
