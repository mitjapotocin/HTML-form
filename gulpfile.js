const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const uglifycss = require("gulp-uglifycss");
const minify = require("gulp-babel-minify");

gulp.task("prefix_uglify_css", () =>
  gulp
    .src("css/styles.css")
    .pipe(
      autoprefixer({
           cascade: false
      })
    )
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(gulp.dest("dist"))
);

gulp.task("minify_js", () =>
  gulp.src("js/main.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("./dist"))
);

