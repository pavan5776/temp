var today, someday, text;
today = new Date();
someday = new Date('04-12-2015');
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    console.log("Today is before January 14, 2100.");
} else {
    console.log("Today is after January 14, 2100.");
}
/*////////////////////////////////////////////////////////////////////////////
if(check.getTime() === checkDate.getTime())
															{
																//console.info(checkDate);
																if(times.length>0){

																	times.push(rows6[j]);
																	count++;
																}
																else
																{
																	//console.log("hello");
																	times.push(rows6[j]);
																	count++;
																}
															}
														}
														/*if(count == 0)
														{

															agevnts.push(times);
															console.log(times);
															times =[];
															times.push(rows6[j]);
														}*/