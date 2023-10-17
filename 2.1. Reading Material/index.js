const fs = require("fs");
const option = { encoding:"utf-8" };

const callback = (err,data) => {
    console.log("Aku muncul kedua");
    if (err) {
        return console.error("Error : ", err.message);
    }
    console.log("Isi File :", data);
};
fs.readFile('contoh.txt',{
    encoding: 'utf-8'
},callback)
console.log("Muncul Pertama");