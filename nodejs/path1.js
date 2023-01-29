const path = require("path");

const pResolved = path.resolve("a", "data", "products", "products1.json");
const pJoined = path.join("a", "data", "products", "products1.json");
console.log("After resolve: ", pResolved, "\nAfter join: ", pJoined);