var m=require("mysql");
var con=m.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'WebMobi'
});
con.connect;
con.query('select * from events INNER JOIN speaker ON events.eventID = speaker.eventID where events.evcentID=?',[1],function(err,rows,fields){
	if (err) throw err;
	console.log('The values in the table \n',rows);
});
con.end();