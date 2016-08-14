"use strict";
var gulp = require('gulp');
var copy = require('copy');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var bourbon = require('bourbon').includePaths;

var sourceFolder = 'src/';
var buildFolder = 'public/';

browserSync.init({ server: { baseDir: "./" + buildFolder } });

var jsSources = [
  sourceFolder + 'js/models/favourites/api.js',
  sourceFolder + 'js/models/favourites/favourites-model.js',
  sourceFolder + 'js/models/favourites/module.js',
  sourceFolder + 'js/models/gif/api.js',
  sourceFolder + 'js/models/gif/gif-model.js',
  sourceFolder + 'js/models/gif/module.js',
  sourceFolder + 'js/common/filters/extract-name-from-slug.js',
  sourceFolder + 'js/common/module.js',
  sourceFolder + 'components/header/controller.js',
  sourceFolder + 'components/header/module.js',
  sourceFolder + 'js/views/dashboard/controller.js',
  sourceFolder + 'js/views/dashboard/module.js',
  sourceFolder + 'js/routes.js',
  sourceFolder + 'js/app.js'
];

var scssSources = [ sourceFolder + "scss/style.scss" ];

var pugSources = [ sourceFolder + "index.pug" ];

var templateFiles = [
  sourceFolder + "js/views/dashboard/dashboard-template.pug"
];

gulp.task('compilePug', function() {
    return gulp.src( pugSources )
               .pipe(pug())
               .pipe(gulp.dest(buildFolder))
               .pipe(browserSync.reload({ stream: true }));
});

gulp.task('compileTemplates', function() {
    return gulp.src( templateFiles )
               .pipe(pug())
               .pipe(gulp.dest(buildFolder + 'templates/'))
               .pipe(browserSync.reload({ stream: true }));
});

gulp.task('compileScss', function() {
    return gulp.src( scssSources )
               .pipe(concat('style.css'))
               .pipe(sass({ includePaths: bourbon }))
               .pipe(gulp.dest(buildFolder + 'style/'))
               .pipe(browserSync.reload({ stream: true }));
});

gulp.task('compileJs', function() {
    return gulp.src( jsSources )
               .pipe(uglify())
               .pipe(concat('app.js'))
               .pipe(gulp.dest(buildFolder + 'js'))
               .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watchJsFiles', function() {
  gulp.watch( sourceFolder + '**/*.js', ['compileJs']);
});

gulp.task('watchScssFiles', function() {
  gulp.watch( sourceFolder + '**/*.scss', [ 'compileScss' ]);
});

gulp.task('watchPugFiles', function() {
  gulp.watch( sourceFolder + '**/*.pug', [ 'compilePug', 'compileTemplates' ]);
});

gulp.task('copyResourceImgs', function(cb) {
  copy(sourceFolder + 'resources/imgs/*', buildFolder + 'resources/imgs', cb);
});

gulp.task('default', [ 'copyResourceImgs', 'compilePug', 'compileScss', 'compileJs', 'compileTemplates', 'watchJsFiles', 'watchScssFiles', 'watchPugFiles' ]);


