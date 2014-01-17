node-proxypage
=========

Simple proxy page for node.js and express to proxy cross doamin reqeuest, supports GET and POST.

## Install

```
  npm install proxypage
```

## Super simple to use

Proxypage is designed to be the simplest way possible to proxy cross domain http calls.

In express:
```javascript
var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.bodyParser());

app.all('/proxy', proxypage.proxy);

//or to mimic an .aspx page:
//app.all('/proxy/proxy.aspy', proxypage.proxy);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

//test: http://localhost:3000/proxy?http://www.arcgis.com/sharing/rest/search?num=20&start=0&sortField=numViews&sortOrder=desc&q=owner%3ADavidSpriggs&f=json
```
