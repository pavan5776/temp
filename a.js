
var h=require("express"),a=h();
a.get('/',function(r,s){
	s.send("this is pavan page");
});
var s1=a.listen(1234,function(){
	var n=s1.address().address;
	var v=s1.address().port;
	console.log('server is running in the port of::%s:%S',n,v);
});