// const imagemin = require("imagemin");
// const imageminPngquant = require("imagemin-pngquant");
// (async () => {
//   await imagemin(["images/*.png"], {
//     destination: "build/images",
//     plugins: [imageminPngquant({ quality: [0, 0.05] })],
//   });

//   console.log("Well Done Dude")
// })();

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

exports.default = () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("build/images"));
