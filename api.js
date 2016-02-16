var e=require("express"),s=e(),sq=require("mysql"),con=sq.createPool({
		host:'localhost',
		user:'root',
		password:'',
		database:'WebMobi'
	});
s.get('/',function(req,res){
	con.getConnection(function(err,conn){
		if(err){
			console.err('Connection Error',err);
			res.statuscode=503;
			res.send({result:error, err:err.code});
		}
		else{
			conn.query('select * from server',function(err,rows,fields){
				if(err){
					console.err(err);
					res.statuscode=500;
					res.send({result:error2, err:err});
				}
				res.send(
					rows
				);
			});
		}
	});
});
s.listen(1000);