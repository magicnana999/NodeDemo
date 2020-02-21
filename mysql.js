let mysql = require('mysql');     //引入mysql模块

let connection = mysql.createConnection({      //创建mysql实例
    host:'120.55.160.172',
    port:'3306',
    user:'loan',
    password:'loan@2020',
    database:'loansix'
});
connection.connect();
console.log("mysql success")

module.exports = connection;
