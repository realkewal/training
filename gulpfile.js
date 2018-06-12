const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const { phpMinify } = require('@cedx/gulp-php-minify');
const connect = require('gulp-connect-php');
const image = require('gulp-image');
const babel = require('gulp-babel');


gulp.task('html', gulp.series(function () {
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
    .pipe(browserSync.stream());
}));

// gulp.task('css', gulp.series(function () {
//   return gulp.src('src/css/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('build/css'))
//     .pipe(browserSync.stream());
// }));



gulp.task('babel', () =>
  gulp.src('src/js/unsplash.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('build/js'))
);

gulp.task('js', gulp.series(function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/popper.js/dist/popper.min.js'])
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.stream());
}));


gulp.task('images', gulp.series(function() {
  return gulp.src('src/images/**/*.*')
    .pipe(image())
    .pipe(gulp.dest("build/images"))
    .pipe(browserSync.stream());
}));

gulp.task('sass', gulp.series(function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/css/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
}));

gulp.task('minify:php', gulp.series(() => gulp.src('src/*.php', { read: false })
  .pipe(phpMinify())
  .pipe(gulp.dest('build/'))
  .pipe(browserSync.stream())
));


gulp.task('all', gulp.series('minify:php', 'html', 'babel', 'js', 'sass', 'images'));


gulp.task('connectSync', gulp.series(function () {
  connect.server({ base: 'build', port: 8010, keepalive: true }, function () {
    browserSync({
      proxy: '127.0.0.1:8010',
      browser: "google chrome"
    });
  });
  gulp.watch('src/**/*.*', gulp.series('all' , function(done) {
    browserSync.reload();
    done();
  }));
}));


gulp.task('default', gulp.series('connectSync'));
