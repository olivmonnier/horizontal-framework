const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const del = require('del');
const runSequence = require('run-sequence');

const isEnvProduction = process.NODE_ENV === 'production';

const dirs = {
  src: 'src',
  dest: 'dist'
}

const sassPaths = {
  src: `${dirs.src}/sass/main.scss`,
  dest: `${dirs.dest}/`
}

const jsPaths = {
  src: `${dirs.src}/js/index.js`,
  dest: `${dirs.dest}/`
}

const cleanFolders = [
  `${dirs.dest}`
]

gulp.task('clean', () => {
  return del(cleanFolders)
});

gulp.task('styles', () => {
  return gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(isEnvProduction, cleanCss()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassPaths.dest))
});

gulp.task('js', () => {
  const bundler = browserify({
    entries: jsPaths.src,
    debug: true
  });
  bundler.transform(babelify);

  return bundler
    .bundle()
    .on('error', err => console.error(err))
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpif(isEnvProduction, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({
      basename: 'bundle'
    }))
    .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('build', () => {
  return runSequence(
    'clean',
    ['styles', 'js']
  )
});