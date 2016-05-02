var express = require('express');
var app = express();


app.get("/hello", function(req, res) {
  if (req.query.name){
    res.end("<h1>Hello, " + req.query.name + ".");
  }else {
    res.send('Hello World!');
  }
});



app.get('/calculator/:operation/:num1/:num2', function(req, res) {
  
  console.log(req.params)
  
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);
    var operator = req.params.operation;
    
    var result;
    if (operator === "add"){
     result = num1+num2;
    } else if (operator === "sub"){
     result = num1-num2;
    }else if (operator === "mult"){
     result = num1*num2;
    }else if (operator === "div"){
      result = num1/num2
    }
    res.send({
      operator: operator,
      firstOperand: num1,
      secondOperand: num2,
      solution: result
    })
  
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
