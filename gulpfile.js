var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('default', function() {
  return gulp.src('./jquery.seeView.js')
    .pipe(uglify())
    .pipe(rename("jquery.seeView.min.js"))
    .pipe(gulp.dest('./'));
});