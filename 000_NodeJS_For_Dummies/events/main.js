var fs = require("fs");
fs.readFile('input.txt', function(err, data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
})

fs.readFile('input2.txt', function(err, data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
})

fs.readFile('input3.txt', function(err, data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
})

console.log("End!")