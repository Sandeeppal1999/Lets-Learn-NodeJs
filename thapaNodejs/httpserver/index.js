// the http.createServer() method include request and response parameters which is supplied by nodejs.

// The request object can be used to get information about the current http request
//eg. url, request, header and data.
// the response object can be used to send a response for a current 



const http = require('http');
const server= http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("hello India ..   you are in Home page...");
    }
    else if(req.url=="/about"){
        res.end("hello India !.... you are in about page....");
    }
    else if(req.url=="/blog"){
        res.end("hello India !.... you are in Blog  page....");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end(" 404 Page doesn't Exists!..");
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
})