var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var skillModel=require('../models/skillModel')
router.post('/skills',(req,res)=>{
  let user=new skillModel({
   skills:req.body.skills
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/skills',(req,res)=>{
 skillModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;