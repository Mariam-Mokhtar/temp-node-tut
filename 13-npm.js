//npm packagesis an external modulenedd to install first
const _ = require("lodash");
const array = [1, [2, [3, [4, [5]]]]];
// convert array into flat array
const newarray = _.flattenDeep(array);
console.log(newarray);