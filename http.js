const http = require('http');

let person = {
  name: 'Marco',
  age: 43
}
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World!!!');
    res.end;
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify(person));
    res.end;
  }
});
server.listen(8090);

/* console.log('server listening at 8090', (socket) => {
  console.log('new incoming conntion...');

});
server.on('connection'); */