var gulp    = require('gulp'),
    concat  = require('gulp-concat');

var paths = {
  src: [
    './src/index.js',
  ],
  dist: './dist/'
};

gulp.task('concat', function(){
  return gulp.src(paths.src)
    .pipe(concat('ng-geodist.js'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['concat']);

gulp.task('watch', function(){
  gulp.watch(paths.src, ['build']);
});

gulp.task('default', ['build' ,'watch']);