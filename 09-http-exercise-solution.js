const util = require('util');
const fs = require('fs');
const http = require('http');

let readFilePromise = util.promisify(fs.readFile);

http
  .createServer(async (req, res) => {
    //    wait till the file is read
    const content = await readFilePromise('index.html', { encoding: 'utf-8' });
    //  write to the response stream
    res.write(content);
    res.end();
  })
  .listen(3000);
