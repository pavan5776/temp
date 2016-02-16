var mysql = require("mysql"),
		con = mysql.createPool({
		host:'localhost',
		user:'root',
		password:'',
		database:'WebMobi'
	});


insert =function(){


con.getConnection(function(err,con1){
con1.query('insert into  pavan (eid,name, email, salary) values(?,?,?,?)',["1","pavan","pavan@webmobi.com","1000000000"],function(err, qwd){
if(err){
	console.info("Error",err);
}
	console.log("inserted Successful");
});
})
}



update =function(){
	var eid = 1212; 
	var eid="drop table pvan;"
	con.getConnection(function(err,con1){
		if(err){
			console.log("Error is:",err);
		}
		else{
			con1.query('update pavan set eid=? where name=?',[eid,"luck"],function(err){
				if (err) {console.log("Error is ",err)};
				console.log("successfully update");
			});
		}
	})

}

deleteRec = function(){
	con.getConnection(function(err,con1){
		if(err){
			console.log("Error is:",err);
		}
		else{
			con1.query('delete from pavan where name="luck" ',function(err){
				if (err) {console.log("Error is ",err)};
				console.log("successfully deleted");
			});
		}
	})

}
retrieveRec =function(){
	con.getConnection(function(err,con1){
		if(err){
			console.err('Error is :',err);
			// res.statuscode=503;
			// res.send({result: Error, Error:err});
		}
		else{
			con1.query('select * from pavan',function(err,rows,fields){
				if(err){
					console.err('Error 2 is :',err);
					// res.statuscode=500;
					// res.send({connection: Error,Error:err});
				}
				console.info(" retrived rows",rows);
				// res.send(rows);
			});
		}
	});
}

insert();

update();

retrieveRec();

deleteRec();