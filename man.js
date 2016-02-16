var express=require("express"),ap=express().get('/hello',function(req,res){
	res.send("welcom To Pavan");
}).listen(2000);