const path = require("path");

// return my platform speific separator
console.log(path.sep)
    // path join give it locationand return normalized path
const filepath = path.join('/contents', '/subfolder', '/test.txt');
console.log(filepath);
// base is yhe last term in file path
const base = path.basename(filepath);
console.log(base);
//resolve return absolute path
const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'test.txt');
console.log(absolute);