var gulp = require('gulp');
var server = require('gulp-webserver');
var scss = require('gulp-sass');
var url = require('url');
var fs = require('fs');
var path = require('path');
var li = require('./moke/li.json');
var nav = require('./moke/nav.json');
gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css'));
});
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return;
                }
                if (pathname === '/api/li') {
                    res.end(JSON.stringify({ code: 1, data: li }))
                } else if (pathname === '/api/nav') {
                    res.end(JSON.stringify({ code: 1, data: nav }))
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
});
gulp.task('dev', gulp.series('scss', 'server', 'watch'));