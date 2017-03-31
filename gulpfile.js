// Modules.
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


// Variables.
var input = ['./assets/sass/*.scss', './assets/sass/**/*.scss'];

var output = './assets/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var browserSyncProxy = 't_s.dev';


// Tasks.
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: browserSyncProxy
  });
});


gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)

    .pipe(sourcemaps.init())

    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))

    .pipe(sourcemaps.write())

    .pipe(autoprefixer(autoprefixerOptions))

    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output))

    .pipe(browserSync.stream());
});


gulp.task('watch', function() {
  return gulp

    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])

    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


gulp.task('default', ['browser-sync', 'sass', 'watch']);
