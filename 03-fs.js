const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log('files: ' + files);

fs.readdir('./', (err, files) => {
  console.log('files: ' + files);
});

fs.readdir('$', (err, files) => {
  console.log('ERROR: ' + err);
});