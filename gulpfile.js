var svgstore = require('gulp-svgstore')
var gulp = require('gulp')

gulp.task('default', function() {
  return gulp.src('input/*.svg')
    .pipe(svgstore({
      fileName: 'icons.svg',
      prefix: 'icon-'
    }))
    .pipe(gulp.dest('output/'))
})