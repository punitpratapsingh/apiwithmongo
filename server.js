const express=require('express');
const app=express();
const book=require('./schema/books');


const db='mongodb://localhost:27017/mydb';
moongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port=3000;



app.get('/',(req,res)=>{
res.send('hello');

});



app.get('/book',(req,res)=>{
    console.log('getting all books');
    books.find({})
    .exec(function(err,book){
if(err){
    res.send('error');

}else{
    res.json(book);
}

    });
});


app.get('/book/:id',(req,res)=>{
console.log('getting one book details  by id');
books.findOne({
    _id:req.params.id
})
.exec(function(err,book){
    if(err){
        res.send("err");
    }else{
        res.json(book);
    }
})
})

app.listen(port,()=>{
    console.log('hello');
});