# UploadExcelToMySQL
Work on Excel file and on every save upload the data to MySQL table.  
Converts xls/xlsx file to csv format (doesn't preserve columns names) and uploads it to MySQL table.  
Contains also ftp task for uploading csv file by FTP.

### How to use it:

1. Open `gulpfile.js` file
2. Edit tasks:
  1. `xls-csv` - edit Excel book name, Excel file name and a name for a temporary csv file
  2. `mysql-import` - edit
    * host name - `localhost`
    * user name - `root`
    * password - `password="your_password"`
    * database name - `use database_name`
    * table name, two places: `truncate table table_name` and `INTO TABLE table_name`
    * csv file absolute path - `LOAD DATA INFILE \'path_to_file\`
3. Open cmd
4. Check if you have **nodejs** and **gulp** installed globally. If not:
  * `npm install -g gulp`
5. Download the dependencies: `npm install`
6. Run: `gulp upload-xls`
7. Work on Excel file and get your data updates the MySQL table automatically on each save

### Notes:
Each save on Excel file will erase the previous data in MySQL.  
You have to provide consistent columns and data types in MySQL.  
Don't close the command line window, if you do - the automatic database updates will stop.  
You have a `ftp` task for uploading csv file. If you need it, do:

1. Edit csv file name - `test.csv` row 35
2. Edit your FTP credentials: host, user and password (rows 37-39 in `gulpfile.js`)
3. Run `gulp ftp` in command line