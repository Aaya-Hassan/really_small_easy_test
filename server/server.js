var express = require('express');
var mongoose = require('mongoose');
var app = express();

//require two files here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI ='mongodb://localhost/tests';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('...mongoDB is open');
	});


//=============================================================================
/*									Server   								 */
//=============================================================================
	var port = 3000;
	app.set('port', (process.env.PORT || port));
	app.listen(app.get('port') , function () {
		console.log('...Server now listening on port ' + app.get('port'));
	});


module.exports = app;

