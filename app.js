var express = require('express'); 
var app = express();
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);

app.get('/actCancel', function(req, res){
gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Cancela Liberada');
    });

});

app.listen(2000, function () {
  console.log('Bem vindo ao Cancel!')
})