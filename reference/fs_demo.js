const fs = require('fs');
const path = require('path');


//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log("folder created");
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello Iasi", function(err){
//     if(err) throw err;
//     console.log("File written");

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " Nice", function(err){
//         if(err) throw err;
//         console.log("File written");
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
//         if(err) throw err;
//         console.log(data);
//     });

// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloCiprian.txt'), function(err){
    if(err) throw err;
    console.log("File renamed");
});

