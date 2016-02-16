var fs=require("fs"),data='working on nodejs right now',ws=fs.createWriteStream('output.txt');
ws.write(data,'utf8');
ws.on('finish',function(){
	console.log("write finish");
});
ws.on('error',function(err){
	console.log(err.stack);
});
console.log("Program end");