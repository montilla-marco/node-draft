let url = 'http://logger.api.io/log'

function log(msg) {
  console.log('filename: ' + __filename);
  console.log('dirname: ' + __dirname);
  console.log('exports: ' + exports);
  console.log('require: ' + require);


  console.log(msg);
}

module.exports = log;
module.exports.Logger = log;
