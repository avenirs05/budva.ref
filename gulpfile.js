const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const dir_theme_budva = 'catalog/view/theme/budva/';

const isDev = true;

// Если isDev = false, то debug() не нужен

// gulp.task('less', function() {
// 		return gulp.src([dir_theme_budva + 'src/vars.less', dir_theme_budva + 'src/**/*.less'])		
// 					.pipe( less() )				
// 					.pipe( concat('bundle.less') )
// 					.pipe( gulp.dest(dir_theme_budva + 'src') )
// });

gulp.task('less', function() {
		return gulp.src([dir_theme_budva + 'src/vars.less', 
										 dir_theme_budva + 'src/**/*.less',
										 '!' + dir_theme_budva + 'src/bundle.less'
									 ])		
					// .pipe( less() )				
					.pipe( concat('bundle.less') )
					.pipe( gulp.dest(dir_theme_budva + 'src') )
});

gulp.task('css', function() {
		return gulp.src([dir_theme_budva + 'src/bundle.less', 
										'!' + dir_theme_budva + 'src/vars.less'])
					.pipe( gulpIf(isDev, sourcemaps.init() ) )		
					.pipe( autoprefixer() )				
					.pipe( less() )									
					.pipe( concat('bundle.css') )
				  // .pipe( cleanCss() )
					.pipe( gulpIf(isDev, sourcemaps.write() ) )
					.pipe( gulp.dest(dir_theme_budva + 'dist') )
});

gulp.task('js', function() {
		return gulp.src(dir_theme_budva + 'src/**/*.js')
					.pipe( gulpIf(isDev, sourcemaps.init() ) )		
					.pipe(babel({
					    presets: ['env']
					}))
					.pipe( concat('bundle.js') )
					// .pipe( uglify() )
					.pipe( gulpIf(isDev, sourcemaps.write() ) )
					.pipe( gulp.dest(dir_theme_budva + 'dist') )
});



gulp.task('watch', function () {
		gulp.watch(dir_theme_budva + 'src/**/*.less', ['less']);
		gulp.watch(dir_theme_budva + 'src/bundle.less', ['css']);
		gulp.watch(dir_theme_budva + 'src/**/*.js', ['js']);
});


gulp.task('default', ['less', 'css', 'js', 'watch']);

























// Live reload. Пока не работает

// gulp.task('serve', function () {
// 		browserSync.init({
// 				server: {
// 						baseDir: './template'
// 				}
// 		});
		
// 		gulp.watch('src/**/*.less', ['less']);
// 		gulp.watch('./template').on('change', browserSync.reload);
// });
// gulp.task('default', ['less', 'serve']);



