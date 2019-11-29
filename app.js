var express = require('express');
var app = express();
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);

function actCancel(gpio) {
	for (var a = 0; a < 10; a++) {
		for (var i = 0; i < 10; i++) {
			gpio.setup(7, gpio.DIR_OUT);
			gpio.write(7, true);
			gpio.setup(7, gpio.DIR_OUT);
			gpio.write(7, false);
			gpio.setup(7, gpio.DIR_IN);
		}
		for (var i = 0; i < 10; i++) {
			gpio.setup(7, gpio.DIR_OUT);
			gpio.write(7, true);
			gpio.setup(7, gpio.DIR_OUT);
			gpio.write(7, false);
			gpio.setup(7, gpio.DIR_IN);
		}
	}
}

app.use(function (req, res, next) {

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
	
});

app.get('/actCancel', function (req, res) {
	gpio.write(7, true, function (err) {

		if (err) throw err;
		actCancel(gpio);
		res.send('{"msg":"Cancela Liberada"}');

	});

});

app.listen(2000, function () {
	console.log('Bem vindo ao Cancel!')
})