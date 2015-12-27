/// <binding ProjectOpened='default, tsd' />
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
    , uglify = require('gulp-uglify')
    , tsd = require('gulp-tsd')
    , reporters = require('reporters')
;

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(plumber({
          errorHandler: onError
      }))
      .pipe(clean());
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src('src/**/*')
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(newer('wwwroot'))
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('minifyhtml', function () {
    return gulp.src(['wwwroot/**/*.html', '!/**/*.min.html', '!wwwroot/lib/**/*'])
      .pipe(plumber({
          errorHandler: onError
      }))
     .pipe(sourcemaps.init())
     .pipe(minifyhtml())
     .pipe(rename({
         extname: '.min.html'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('tscompile', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'])
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(sourcemaps.init())
    .pipe(ts({
        target: 'ES5',
        declarationFiles: false,
        noExternalResolve: true
    }))
    .pipe(rename({ extname: '.js' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('wwwroot/./'));
});


gulp.task('tslint', function () {
    var tsResult = gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*', '!.//**/*.d.ts'])
      .pipe(tslint())
      .pipe(tslint.report(reporters('gulp-tslint', {warning: true})))
      .pipe(ts({}, {}, reporters('gulp-typescript')));
});



gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});



 
// ----------------------------------------------------------------
// Default Task
// ----------------------------------------------------------------
gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot',
                ['minifyhtml', 'tscompile', 'tslint']
                , 'watch'
                );
});


gulp.task('watch', function () {

    // ---------------------------------------------------------------
    // Watching JS files
    // ---------------------------------------------------------------
    // Copy all files except *.js files.
    gulp.watch(['src/**/*', '!bower_components/**.*'], function () { runSequence('copy-to-wwwroot'); });

    // ---------------------------------------------------------------
    // Watching TypeScript files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tscompile'); });

    // ---------------------------------------------------------------
    // Watch - Execute linters
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tslint'); });

    gulp.watch(['wwwroot/**/*.html', '!wwwroot/**/*.min.html', '!wwwroot/lib/**/*'], ['minifyhtml']);

});