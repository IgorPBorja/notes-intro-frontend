// assumes module1.js is in the same folder
hello_module = require("./module1.js");
hello_module.hello("C");
hello_module.hello(hello_module.name1);

// ---------------------------------------
// assumes module2.js is in the same folder
		
// assigning using object deconstruction
const {add, value1, value2} = require("./module2.js");
console.log(add(value1, value2));
