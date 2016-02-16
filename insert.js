var v=require("express"),a=v();
var sq=require("mysql"),con=sq.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:"WebMobi"
});
a.get('/',function(req,res){
	con.getConnection(function(err,com){
		if(err){
			console.info('Error is::',err);
			res.statuscode=503;
			res.send({Result:Error,Error:err});
		}
		else{
			com.query('update pavan set name="lack" where eid=1',function(err,rows,fields){
				if(err){
					console.info('Error 2 is',err);
					res.statuscode=500;
					res.send({Result:Error,Error:err});
				}else{
					res.send('Successfully update');
				}
			});
			/*com.query('select * from pavan',function(err,rows,fields){
				res.send(rows);
			});*/
		}
		
	});
});
a.listen(1234);