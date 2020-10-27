var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');

app.use('/public', express.static('public'));



app.get('/*', function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log('pathname',__dirname,pathname);
   fs.readFile( __dirname + "/" + pathname, 'utf8', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});    
         
    // 响应文件内容
    // res.write(data.toString());      
    res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})