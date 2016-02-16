var globalValue;
exports.setGlobal=function(){
	globalValue=12;
}
exports.returnGlobal=function(){
	console.log(global);
	return globalValue;
}