var pi = 3.14;
var test = () => {
  return "it is export module test";
};

var plus = (a, b) => {
  c = a + b;
  return c;
};

exports.hello = console.log("hello world");
module.exports.hello2 = console.log("hello world 2");

exports.test = test;

module.exports = {
  firsName: "Nick",
  lastName: "Suriya",
  plus: plus,
};

module.exports = (msg) => {
  console.log(msg);
};

module.exports = function(firstName, lastName)  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName =  () => { 
        return this.firstName + ' ' + this.lastName;
    }
}


