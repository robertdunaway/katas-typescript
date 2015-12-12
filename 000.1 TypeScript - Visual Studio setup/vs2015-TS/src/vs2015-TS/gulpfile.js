var onError = function (err) {
    console.log(err);
};

var gulp = require('gulp')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , runSequence = require('run-sequence')
    , plumber = require('gulp-plumber')
    , clean = require('gulp-clean')
    , newer = require('gulp-newer')
    , minifyhtml = require('gulp-minify-html')
    , ts = require('gulp-typescript')
    , tslint = require('gulp-tslint')
    , tsstylish = require('gulp-tslint-stylish')
    , watch = require('gulp-watch')
;

