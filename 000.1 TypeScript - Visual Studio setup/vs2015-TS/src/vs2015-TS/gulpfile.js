/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    // npm: './node_modules/',
    // lib: "./" + project.webroot + "/lib/",
    tsSource: './src/**/*.ts',
    tsOutput: 'wwwroot/./',
    tsDef: "./src/TypeScript/definitions/"
};

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    module: 'AMD',
    removeComments: true
});

gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.tsSource)
                    .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});


gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.tsDef, ['ts-compile']);
});