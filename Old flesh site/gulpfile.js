var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith  = require('gulp.spritesmith');

gulp.task('sass', function () {
  gulp.src('sass/*.sass')
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {
      cascade: true
    }))
    .pipe(gulp.dest('css/'))
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.sass',
    algorithm: 'binary-tree',
  }));
  spriteData.img.pipe(gulp.dest('img/'));
  spriteData.css.pipe(gulp.dest('sass/'));
});

gulp.task('watch', ['sass'], function(){
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['watch']);