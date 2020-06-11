const http = require('http');
const express = require('express');

const webroute = require('./routes/route');

const app = express();


app.set('view engine','ejs');
app.set('views', 'views');


const server = http.createServer(app);


// app.use('/',(req,res,next)=>{
//     console.log('hi');
// });

app.use('/',webroute);

server.listen(8000);