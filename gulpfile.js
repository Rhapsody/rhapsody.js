var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

var source = [ 'src/*.js' ];

gulp.task('default', function() {
  gulp.watch(source, ['build']);
});

gulp.task('build', function() {
  gulp.src(source)
      .pipe(gulp.dest('.'))
      .pipe(uglify('rhapsody.min.js'))
      .pipe(gulp.dest('.'));
});
