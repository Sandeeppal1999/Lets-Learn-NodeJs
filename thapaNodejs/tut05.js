const fs = require("fs");
// create file.txt file  if not exits otherwise overwrite file data...
// fs.writeFileSync('file.txt', "hello India, I am learnibg nodejs from thapa technical");

// fs.appendFileSync('file.txt',"Hello Sandeep, how are you?...😅")

//  const buf_data=fs.readFileSync('file.txt');
// console.log(buf_data);
// console.log(buf_data.toString());

// Node include  an additonal data type called buffer
// Buffer data type is not available in browser javascript
// buffer is mainly used to store binary data
// while reading from a file or receiving packets over the network.
//

// remanme file 
fs.renameSync('file.txt','rw.txt');
