var express = require('express');
connection = require('../mysql');     //引入mysql模块
redis = require("../redis")

var router = express.Router();

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
