const fs= require('fs');

// fs.writeFile('file.txt','Hello India, I am  working at TFT',(err)=>{
// console.log("Write process is completed !........🆗");
// console.log(err);
// })

// fs.appendFile('file.txt',"Hello TFT, I  am learning NodeJS",()=>{
//     console.log("New data added");

// })


fs.readFile("file.txt",'utf-8',(err,data)=>{
    console.log(data);

});
console.log("after the data!.......");
