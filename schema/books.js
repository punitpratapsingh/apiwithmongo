const moongoose=require('moongoose');
const schema =moongoose.Schema;
const connect = mongoose.connect('mongodb://localhost:27017/mydb');

const bookSchema=new schema({
name:String,
topic:String

});

module.exports=moongoose.model('books',bookSchema);