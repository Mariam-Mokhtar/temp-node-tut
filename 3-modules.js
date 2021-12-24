//from  global we know about require and module explain:
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const SayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require('./7-mind-grenade')

SayHi(names.Mariam);
SayHi(names.Ghina);
SayHi(names.lastName);
console.log(data);
SayHi(data.items[0]);
SayHi(data.singlePerson.name);