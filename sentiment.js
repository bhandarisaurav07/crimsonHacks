var request = require('request');

var dataString = 'text=great';

var options = {
    url: 'http://text-processing.com/api/sentiment/',
    method: 'POST',
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
