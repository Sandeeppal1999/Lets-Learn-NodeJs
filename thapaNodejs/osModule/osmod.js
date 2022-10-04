const os = require('os');
console.log(os.arch());

const free=os.freemem();
console.log(`${free /1024/1024/1024}`);// GB
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());