proxypage
=========

Simple proxy page for node.js to proxy cross doamin reqeuest, supports GET and POST.

## Install

<pre>
  npm install proxypage
</pre>

Or from source:

<pre>
  git clone git://github.com/DavidSpriggs/proxypage.git 
  cd proxyPage
  npm link
</pre>

## Super simple to use

ProxyPage is designed to be the simplest way possible to proxy cross domain http calls.

In express:
```javascript
var express = require('express');
var proxyPage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.bodyParser());

app.all('/proxy', proxypage.proxy);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

//test: http://localhost:3000/proxy?https://www.arcgis.com/sharing/rest/search?num=20&start=0&sortField=numViews&sortOrder=desc&q=owner%3ADavidSpriggs&f=json
```