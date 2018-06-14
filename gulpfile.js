var gulp       = require('gulp'),
  browserSync  = require('browser-sync'),
  sass         = require('gulp-sass'),
  jade         = require('gulp-jade'),
  del          = require('del'),
  imagemin     = require('gulp-imagemin'),
  pngquant     = require('imagemin-pngquant'),
  cache        = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  spritesmith  = require('gulp.spritesmith'),
  concat       = require('gulp-concat'),
  uglify       = require('gulp-uglify'),
  pump         = require('pump'),
  cleanCSS     = require('gulp-clean-css'),
  sourcemaps   = require('gulp-sourcemaps');


gulp.task('sass', function () {
  gulp.src('sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 9'], {
      cascade: true
    }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('css/'))
});


gulp.task('watch', ['sass'],  function () {
  gulp.watch('sass/*.sass', ['sass']);
});


gulp.task('img', function () {
  return gulp.src('img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('img/'));
});



gulp.task('sprite', function () {
  var spriteData = gulp.src('sprite-icons/service-market/*.png').pipe(spritesmith({
    imgName: 'service-market.png',
    cssName: '../sass/_service-market.sass',
    padding : 20
  }));
  return spriteData.pipe(gulp.dest('sprite/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('prod/js/**/*.js'),
        uglify(),
        gulp.dest('prod/js/')
    ],
    cb
  );
});

gulp.task('minify-css', function() {
  return gulp.src('dev/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('prod/css'));
});

gulp.task('scripts', function () {
  return gulp.src('dev/js/includes/*.js')
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('prod/js/includes'));
});

gulp.task('spritenew', function () {
var spriteData = gulp.src('sprite/*')
    .pipe(spritesmith({
        imgName: 'sprite-@1x.png',
        cssName: '../sass/_sprite.sass',
        imgPath: "img/sprite-@1x.png",

        algorithm: 'top-down',
        padding: 20,

// retinaSrcFilter: 'app/img/sprites/*@2x.png',
// retinaImgName: 'sprite-@2x.png',
// retinaImgPath: "/img/sprite-@2x.png"
}))
.pipe(browserSync.reload({stream: true}));
return spriteData.pipe(gulp.dest('img/'));
});
