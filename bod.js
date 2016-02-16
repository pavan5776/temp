var exp=require("express"),
ap=exp(),
bp=require("body-parser");
var urlp=bp.urlencoded({extended: false})

ap.use(exp.static("public"));
ap.post('/hello',urlp,function(req,res){
	console.log(req.body.name);
}).listen(1111);