var express = require("express"),
		app = express(),
		mysql = require("mysql"),
		con = mysql.createPool({
		host:'localhost',
		user:'root',
		password:'',
		database:'WebMobi'
	});

app.get('/',function(req,res){
	con.getConnection(function(err,con1){
		if(err){
			console.err('Error is :',err);
			res.statuscode=503;
			res.send({result: Error, Error:err});
		}
		else{
			con1.query('select * from pavan',function(err,rows,fields){
				if(err){
					console.err('Error 2 is :',err);
					res.statuscode=500;
					res.send({connection: Error,Error:err});
				}
				res.send(rows);
			});
		}
	});
});
app.listen(1234);
/*if( b.diff(a, 'days') == 0 || b.diff(c, 'days')== -1)
														{
														var st_date = new Date(rows5[i].start_date)*1;
															var en_date = new Date(rows5[i].end_data)*1;
															//console.log("enddate:: "+en_date);
															for(var k = st_date;k <= en_date;k+86400000)
															{
																
																var aa_date = new Date(rows6[j].date)*1;
																//console.log("activity date:: "+aa_date);
																if(k == aa_date)
																{
																	//console.log("IF");
																	agevnts.push(rows6[j]);
																}
																if(en_date=new Date(rows6[j].end_data)*1){
																	break;
																}
																rows5[i].agenda_activities=agevnts;
															}
														}
														var st_date = new Date(rows5[i].start_date)*1;
														var en_date = new Date(rows5[i].end_data)*1;
														for(var k = st_date;k <= en_date;k+86400000)
														{
															var aa_date = new Date(rows6[j].date)*1;
															//console.log(aa_date);
															if(k == aa_date)
															{
																agevnts.push(rows6[j]);
															}
														}*/
														// console.log(agevnts);
												var times=[];
												var times1=[];
												for(var h=0;h<agevnts.length;h++)
												{
													
													if(h==0)
													{
														times1.push(agevnts[h]);
													}
													if((new Date(agevnts[h].date)*1 )== (new Date(agevnts[h-1].date)*1))
													{
														times1.push(agevnts[h]);
														
													}
													else
													{
														times.push(times1);
														times1 = [];
														times1.push(agevnts[h]);	
														
													}
												}
												console.log(times);




												// console.log(agevnts);
												/*var times= [];
												var times1=[];
												// console.log(rows6[i]);
												var timeStampDate = (new Date(agevnts[0].date))*1;
												var count=0;
												//console.log(agevnts);
												for(var h=0;h<agevnts.length;h++)
												{
													var currDate = (new Date(agevnts[h].date))*1;
													var newDate=0;
													if(count>0){
														newDate = (new Date(times1[0].date))*1;
														//console.log(new Date(timeStampDate));
													}
													if(timeStampDate==currDate && count==0)
													{
														times1.push(agevnts[h]);

													}
													if(newDate == current)
													{

													}
													else
													{
														currDate = (new Date(agevnts[h].date))*1;
														timeStampDate = (new Date(agevnts[h].date))*1;
														times.push(times1);
														times1 = [];
														times1.push(agevnts[h]);
														count++;
														
													}
													// times1.push(agevnts[h]);
													// console.log(times1.length);
												}*/
												//  rows5[i].agenda_activities=agevnts;
												var times=[];
												var times1=[];
												for(var h=0;h<agevnts.length;h++)
												{
													
													if(h==0)
													{
														times1.push(agevnts[h]);
													}
													else if (h == agevnts.length-1) {
														times.push(times1);
													}

													else if((new Date(agevnts[h].date)*1 ) == (new Date(agevnts[h-1].date)*1))
													{
														times1.push(agevnts[h]);
														
													}
													else
													{
														times.push(times1);
														times1 = [];
														times1.push(agevnts[h]);	
														
													}
												}
												console.log(times);