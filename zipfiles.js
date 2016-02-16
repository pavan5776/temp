/*express = require("express"),
path = require("path");
var uuid = require('uuid');
var request = require('request');
var fs = require('fs');
bp=require("body-parser");
var urlp=bp.urlencoded({extended: false});
var app = express();
app.use(express.static("public"));
app.post('/postrequest',urlp,function(req,res){
	console.log(req.body.zip);
}).listen(1234);*/
var express = require("express"),
http = require("http"),
fs = require("fs"),
path = require("path"),
qs = require("qs"),
admZip = require("adm-zip");
var app = express();
var application_root = __dirname;
app.use(express.bodyParser());
app.use(express.static(path.join(application_root, "public")));

app.post('/hai',function(req,res){
	console.log(req.body.zip);
	var zip = new admZip(""+req.body.zip+"");
	var zipEntries = zip.getEntries();
	console.log(zipEntries);
	zipEntries.forEach(function(zipEntry){
		if (zipEntry.entryName == "my_file.txt") {
             console.log(zipEntry.data.toString('utf8')); 
        }
	});
}).listen(1111);