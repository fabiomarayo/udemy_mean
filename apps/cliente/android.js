var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
    method: 'POST'
};


// Content-type
var html = "nome=José"; // x-www-form-urlencoded
var json = {nome: 'José'}; // x-www-form-urlencoded
var string_json = JSON.stringify(json);
var buffer_corpo_response = [];

var req = http.request(opcoes, function(res) {
    res.on('data', function(chunk) {
        buffer_corpo_response.push(chunk);        
    });

    res.on('end', function() {
        var corpo = Buffer.concat(buffer_corpo_response).toString();

        console.log(corpo);
    });

    res.on('error', function() {

    });
});
req.write(string_json);
req.end();