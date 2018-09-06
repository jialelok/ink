var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
var jsonParser = bodyParser.json()

app.post('/alert', jsonParser , function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "result":"hello "+req.body.name  
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})