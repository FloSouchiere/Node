const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");

function defaultTask(cb) {
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("build/images"));
  cb();
}

exports.default = defaultTask;
exports.default = () =>
  gulp
    .src("style.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("build"));
