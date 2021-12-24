// another way to access method
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./contents/first.txt", "utf8");
const second = readFileSync("./contents/second.txt", "utf8");
console.log(first, second);
// flag is append data dont remove prev data
writeFileSync("./contents/result.txt", `there is the result:${first},${second}`, { flag: 'a' });
console.log("done task");
console.log("starting the next task");
//SYNC after done completely the first task start the next