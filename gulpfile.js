

var gulp = require("gulp");
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
gulp.task("copy-html",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\onplus"));
});

 gulp.task('copy-img',function(){
 	   gulp.src('img/*{jpg,png}')
 	   .pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\onplus\\img'));
 });
 gulp.task("copy-one",function(){
 	 gulp.src("oneplus.html")
 	 .pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\onplus'));
 });