const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const moongoose=require('moongoose');
const routes=require('./api/routes/index')
const port=3000;



app.use('/api',routes);




app.listen(port,()=>{
    console.log('hello');
});

