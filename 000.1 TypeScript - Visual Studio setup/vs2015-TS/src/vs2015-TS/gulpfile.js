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

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot/**/*', { read: false })
      .pipe(plumber({
          errorHandler: onError
      }))
      .pipe(clean());
});

// ----------------------------------------------------------------
// Default Task
// ----------------------------------------------------------------
gulp.task('default', function () {
    runSequence('annotate', 'clean-dist', 'copy', 'copyFromApps', 'replaceEnvironment',
                ['coreservices', 'routeconfig', 'libs', 'minifyhtml', 'minifyimage'
                    , 'grunt-merge-json:menu', 'jshint', 'tscompile', 'tslint', 'sass']
                , ['uglifyalljs', 'minifycss']
                , 'watch');
});