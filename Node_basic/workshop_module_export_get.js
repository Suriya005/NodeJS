var testModule = require("./workshop_module_export");

console.log(testModule.plus(2, 3) + " is result");

console.log(testModule.test());

var person1 = new testModule('James', 'Bond');

console.log(person1.fullName());
