const fs = require('fs');
const path = require('path');

var fileaddr = path.resolve('/ewomail/mail/vmail/yyf93.com/i/k/t/iktaf8h.20180512/Maildir/cur');

function fileDisplay(filepath){
	fs.readdir(filepath, function(err, files){
		if(err)	{
			console.warn(err);
		}else{
			files.forEach(function(filename){
		        //获取当前文件的绝对路径
		        var filedir = path.join(filepath, filename);
		        //根据文件路径获取文件信息，返回一个fs.Stats对象
		        fs.stat(filedir,function(eror, stats){
		            if(eror){
		                console.warn('获取文件stats失败');
		            }else{
		                var isFile = stats.isFile();//是文件
		                var isDir = stats.isDirectory();//是文件夹
		                if(isFile){
		                    console.log(filedir);
		　　　　　　　　　　　　　　　　　// 读取文件内容
		                    var content = fs.readFileSync(filedir, 'utf-8');
		                    console.log(content);
		                }
		                if(isDir){
		                    fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
		                }
		            }
		        })
		    });
		}
	});
}

fileDisplay(fileaddr);
