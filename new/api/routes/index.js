var express = require('express');
var router=express.Router();
var ctrBook=require('../controller/book.controller.js')
 router.get('/',ctrBook.homepage)


 module.exports=router;