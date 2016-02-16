con.query(qry_agenda,function(err5,rows5)
{
	if(err5)
	{
		callbackError({"response":"error", "responseString": JSON.stringify(err5)});	
	}
	else
	{
		var qry_agndevnts = "select * from agenda_activities"
		con.query(qry_agndevnts,function(err6,rows6)
		{
			if(err6)
			{
				callbackError({"response":"error", "responseString": JSON.stringify(err6)});
			}
			else
			{
				// callbackSuccess({"response":"success", "responseString": rows});
				for(var i=0;i<rows.length;i++)
				{
					var agenda_array = [];
					for(var j=0;j<rows5.length;j++)
					{
						var times = [];
						for(var k=0;k<rows6.length;k++)
						{
							if(rows[0].eventID == rows5[j].eventID)
							{
								if(rows5[j].agendaid == rows6[k].agendaid)
								{
									var startdate = new Date(rows5[j].start_date)*1;
									var enddate = new Date(rows5[j].end_data)*1;
									var curdate = new Date(rows6[k].date)*1;
									if(curdate>=startdate && curdate<=enddate)
									{
										agenda_array.push(rows6[k]);
										// console.log("times");
									}
								}
							}
						}
						if(agenda_array.length>0)
						{
							var times1 = [];
							var staticdate = new Date(agenda_array[0].date)*1;
							for(var act=0;act<agenda_array.length;act++){
								var currentDate = new Date(agenda_array[act].date)*1;
								if(currentDate == staticdate)
								{
									times1.push(agenda_array[act]);
								}
								else
								{
									var agendaobj = {};
									agendaobj.name = times1[0].date;
									agendaobj.agenda_Dtl = times1;
									
									times.push(agendaobj);
									times1 = [];
									staticdate = new Date(agenda_array[act].date)*1;
									times1.push(agenda_array[act]);
								}
								if(act == (agenda_array.length)-1)
								{
									var agendaObj = {};
									agendaobj.name = times1[0].date;
									agendaobj.agenda_Dtl = times1;
									times.push(agendaobj);
									times1 = [];
									// times.push(times1);
								}
							}
							rows[0].agenda = times;
							// callbackSuccess({"response":"success", "responseString": rows});
						}
						else
						{
							rows[0].agenda = [];
							// callbackSuccess({"response":"success", "responseString": rows});
						}										
					}
				}
				callbackSuccess({"response":"success", "responseString": rows});
			}
		});
		// callbackSuccess({"response":"success", "responseString": rows});
	}
});