var express = require('express');
var unirest = require('unirest');
var app = express();
var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/%7Bsessionkey%7D");

request.query({
	"inboundpartialdate": "2019-12-01"
});

request.headers({
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "4e4cc09451msh0b6c83aa51f5b84p13af23jsnba39c4e9e2ce"
});

app.set("view engine","ejs");
app.use(express.static("public"));


app.get('/', function(req,res){
    res.render("landing", {data:request});
    request.end(function (res) {
    	if (res.error) throw new Error(res.error);

    	console.log(res.body);
    });
})

app.get('/testing', function(req,res){
    res.render("testing");
})

var port = process.env.port || 3000;
app.listen(port,process.env.IP,function(){
  console.log("Flight tracking app has started");
  console.log(port);
});
