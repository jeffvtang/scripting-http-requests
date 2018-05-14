var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback) {
  let dataRec = '';

  /* Add your code here */

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataRec += chunk;
    })

    // response.on('end', function () {
    //   console.log(dataRec)
    // })
    response.on('end', function (data) {
      callback(dataRec)
    })


  })
  /* Add your code here */

}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML)
