const fs = require('fs');
const path = require('path');

function fileDisplay (filepath) {
	return new Promise((resolve, reject) => {
		var arr = [];
		fs.readdir(filepath, function(err, files){
			if(err)	{
				reject(err);
			}

			// console.log(files);

			files.forEach(function(filename){
		        var filedir = path.join(filepath, filename);
		        var stats = fs.statSync(filedir);
                var isFile = stats.isFile();//是文件
                if(isFile){                	
                    var content = fs.readFileSync(filedir, 'utf-8');
                    arr.push(content);
                }
		    });
		    resolve(arr);
		});
	});
}

module.exports = {
	fileDisplay: fileDisplay
};

