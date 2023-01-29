const fs = require("fs");

const info = fs.readFile("info.txt", "utf-8", (err, data) =>{
    if (!err){
        console.log(data);
    } else {
        console.log("Error: ", err);
        for (const [m, c] of [
          ["errno ", err.errno],
          ["code ", err.code],
          ["stack ", err.stack],
          ["message ", err.message],
          ["syscall ", err.syscall],
          ["path ", err.path],
          ["name ", err.name],
        ]){
          console.log(m, c);
        }
    }
})

console.log("Trying to read file");