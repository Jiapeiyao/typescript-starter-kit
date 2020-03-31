const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", gulp.series(compileTS, copyLess));

async function compileTS() {
    const compiledFiles = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return [
        compiledFiles.js.pipe(sourcemaps.write('.')).pipe(gulp.dest("dist")),
        compiledFiles.dts.pipe(gulp.dest("dist"))
    ];
}

async function copyLess() {
    gulp.src('src/**/*.less').pipe(gulp.dest("dist"));
}