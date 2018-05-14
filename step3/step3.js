var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {
  let dataRec = '';

  /* Add your code here */

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataRec += chunk;
    })

    response.on('end', function () {
      console.log(dataRec)
    })
  })
}

getAndPrintHTML(requestOptions)
