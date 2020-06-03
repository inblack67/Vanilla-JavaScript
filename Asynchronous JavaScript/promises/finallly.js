const fs = require('fs');
const zlib = require('zlib');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const zlibPromise = util.promisify(zlib.gzip);

readFile('./node/files/demofile.txt', 'utf-8')
  .then((data) =>
    zlibPromise(data)
      .then((data) => console.log(`Final: ${data}`))
      .catch((err) => console.error(`Zip Failed: ${err}`))
  )
  .catch((err) => console.error(`Read Failed: ${err}`))
  .finally(() => console.log('Finally Cleaning up'));

// still nesting issues - promise then hell
