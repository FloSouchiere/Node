const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function defaultTask(cb) {
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("build/images"));
  cb();
}

function css(cb) {
  gulp
    .src("style.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ debug: true }, (details) => {}))
    .pipe(gulp.dest("build"));
  cb();
}

exports.default = gulp.parallel(defaultTask, css);
