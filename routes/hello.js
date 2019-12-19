var express = require('express');
var mysql = require('mysql');     //引入mysql模块
redis = require("../redis")

var router = express.Router();

var connection = mysql.createConnection({      //创建mysql实例
  host:'120.55.160.172',
  port:'3306',
  user:'loan',
  password:'loan@2020',
  database:'loansix'
});
connection.connect();

var data = {
  status: '100',
  msg: '操作成功',
  data: {
    userId: '123456',
    userName: 'hgdqstudio',
    blog: 'http://hgdqstudio.online'
  }
};


/* GET users listing. */
router.get('/', function(req, res, next) {

  var sql = "select * from sys_aboutios";
  connection.query(sql, function (err,result) {
    if(err){
      console.log('[SELECT ERROR]:',err.message);
    }
    //console.log(result);  //数据库查询结果返回到result中
    res.send(JSON.stringify(result));

  });

  redis.set("nodejs_haha","Hello NodeJS");

});

module.exports = router;
