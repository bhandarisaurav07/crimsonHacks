

const accountSid= 'AC4f62813e582e3fc9d34b13c33f81916c';
const authToken= 'c96c09742c37049c6e9ec28a9ad19a5a';

var inspect = require('util').inspect

var client = require('twilio')(accountSid, authToken);
//[JF] The Returned object is a Rest Client and explicit call for Restclient fails...Also new is not accepted

//console.log(inspect(client))

var request = require('request');
var dataString = 'text=i want to die. I am very sad.';
console.log(dataString);
var options = {
    url: 'http://text-processing.com/api/sentiment/',
    method: 'POST',
    body: dataString
};


request(options, callback);
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
    	var obj = JSON.parse(body)
        console.log(obj);
        console.log(obj.probability.neg);
			if (obj.probability.neg>=0.70)
				{
					client.messages.create(
 						 {
   							body: 'Save Mark , He is depressed . URGENT!!',
   								 to: '+18325315024'  ,
    									from: '+12816231672' ,
  												},
  													(err, message) => {
   															 process.stdout.write(message.sid);
  																							}
																								);
																									}
    																									}
																										
																										else {
																											console.log("aa");
																										}
}



