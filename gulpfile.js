var gulp  = require('gulp'),
	shell = require('gulp-shell'),
	watch = require('gulp-watch'),
	ftp   = require('gulp-ftp')

gulp.task('upload-xls', ['watch-xlsx', 'watch-csv']);

gulp.task('xls-csv', function() {
  return gulp.src('', {verbose: true})
	.pipe(shell([
		'XlsToCsv.vbs excelBookName test.xlsx test.csv'
	]))
    .pipe(gulp.dest('output'));
})
gulp.task('mysql-import', function() {
  return gulp.src('', {verbose: true})
	.pipe(shell([
		'mysql -h localhost -u root --password="" -e "use test; truncate table test;LOAD DATA INFILE \'D:/wamp/www/test/test.csv\' INTO TABLE test FIELDS TERMINATED BY \',\';"'
	]))
    .pipe(gulp.dest('output'));
})

gulp.task('watch-xlsx', function () {
    return watch('test.xlsx', function () {
        gulp.start('xls-csv');
    });
});
gulp.task('watch-csv', function () {
    return watch('test.csv', function () {
        gulp.start('mysql-import');
    });
});

gulp.task('ftp', function () {
    return gulp.src('test.csv')
    .pipe(ftp({
        host: 'host',
        user: 'user',
        pass: '1234'
    }))
    .pipe(gulp.dest('output'));
});