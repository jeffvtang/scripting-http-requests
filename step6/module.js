var https = require('https');

function printHTML(html) {
  console.log(html);
}

// getHTML(requestOptions, printHTML)

module.exports = function getHTML(options, callback) {
  let dataRec = '';

  /* Add your code here */

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataRec += chunk;
    })

    response.on('end', function (data) {
      callback(dataRec)
    })

  })
};
