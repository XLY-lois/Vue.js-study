var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.on('request',function(req,res){
	// console.log('收到请求了');
	var parseObj = url.parse(req.url,true);//将路径解析成对象
    var pathname = parseObj.pathname;//单独获取不包含查询字符串的路径部分（即不包含问号后的内容)

	if(pathname === '/'){
			fs.readFile('./index.html',function(err,data){
			if(err){
				return res.end('404 not found.');
			}
			res.end(data);
		});
	}else if(pathname === '/allList'){
		fs.readFile('./allList.json',function(err,data){
			if(err){
				return res.end('404 not found');
            }
            var dataObj = JSON.parse(data);
            console.log(dataObj);
            console.log(JSON.stringify(dataObj));
            res.statusCode = 302;
			res.end(JSON.stringify(dataObj));
		})
	}else if (pathname.indexOf('/public/') >= 0){
		fs.readFile('.'+pathname,function(err,data){
			if(err){
				return res.end('404 not found');
            }
			res.end(data);
		});
	}else{
		fs.readFile('./views/404.html',function(err,data){
			if(err){
				return res.end('404 not found');
			}
			res.end(data);
		});
	}
})

server.listen(3000,function(){
	console.log('running...')
});