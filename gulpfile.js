const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const core = require('babel-core');
const preset = require('babel-preset-env');

gulp.task('js',function(){
    gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(concat("main.js")).pipe(gulp.dest("dist"));
})
gulp.task('sass',function(){
    gulp.src('src/scss/*.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest("dist"));
})
gulp.task('watch',function(){
    gulp.watch(['src/js/*.js','src/scss/*.scss'],['js','sass']);
})