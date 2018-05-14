var https = require('https');
let dataRec = '';

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataRec += chunk;
    })

    response.on('end', function () {
      console.log(dataRec)
    })
  })
}

getAndPrintHTML()
