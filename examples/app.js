// proxy page implimentation by David Spriggs

var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.bodyParser());

app.all('/proxy', proxypage.proxy);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});