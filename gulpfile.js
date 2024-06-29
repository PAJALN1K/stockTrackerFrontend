const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const gulpclean = require("gulp-clean-css");
const map = require("gulp-sourcemaps");
const concat = require("gulp-concat");
// const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

// function scripts() {
//     return src("src/scripts/main.js")
//         .pipe(concat("main.min.js"))
//         .pipe(uglify())
//         .pipe(dest("src/scripts"))
//         .pipe(browserSync.stream())
// }

function styles() {
  return src("src/scss/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
    .pipe(gulpclean())
    .pipe(concat("style.min.css"))
    .pipe(map.write("../sourcemaps/"))
    .pipe(dest("src/css"))
    .pipe(dest("public/css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/**/*.html"]).on("change", browserSync.reload);
}

// function browsersync() {
//   browserSync.init({
//     port: 3000,
//     ui: {
//       port: 3001,
//     },
//     server: {
//       baseDir: "src/",
//     },
//   });
// }

function cleanDist() {
  return src("public").pipe(clean());
}

function building() {
  return src(["src/css/style.min.css", "src/**/*.html"], { base: "src" }).pipe(
    dest("public")
  );
}

exports.styles = styles;
// exports.scripts = scripts;
exports.watching = watching;
// exports.browsersync = browsersync;
exports.build = series(cleanDist, building);
exports.default = parallel(styles, watching);
exports.buildstyles = series(styles, cleanDist, building);
