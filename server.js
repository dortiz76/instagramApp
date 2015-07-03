//Grab all the packages 
var express = require('express');

var app = express();
var instagram = require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');

instagram.use({
client_id: 'e21ef5c27bb749429d60bbd1064f81cf',
client_secret:'5f762ffd93174795841b153d241da42d'

});

app.get('/', function(req, res){

instagram.media_popular(function(err, medias, remaing, limit){

	res.render('pages/index', {grams: medias })
});

});





app.listen(8080, function(err){
if(err){
	console.log("Error");
}else{
	console.log("Listening on port 8080")
}


});