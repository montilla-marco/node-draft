const path = require('path');

let pathObj = path.parse(__filename);
console.log('pathObj dir: ' + pathObj.dir);
console.log('pathObj root: ' + pathObj.root);
console.log('pathObj base: ' + pathObj.base);
console.log('pathObj name: ' + pathObj.name);
console.log('pathObj ext: ' + pathObj.ext);
