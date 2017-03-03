var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
})

gulp.task('compile-less', function(){
	console.log('the compile-less task is running')
	gulp.src('./server/public/styles/*.less')
	.pipe(less())
	.pipe(gulp.dest('./server/public/styles/'))
})

gulp.task('default', ['compile-less'], ['./styles/*.less'])