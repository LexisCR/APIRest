const express=require('express');
const app=express();
const port=3000;

app.get('/', (req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.sendFile(__dirname+'/index.html');
})

app.post('/', (req, res) =>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('Server running at http://localhost:3000');
});

