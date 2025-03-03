var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var educationModel=require('../models/educationModel')
router.post('/education',(req,res)=>{
  let user=new educationModel({
   sname:req.body.sname,
   sgradyear:req.body.sgradyear,
   degree:req.body.degree,
   percentage:req.body.percentage,
   gradyear:req.body.gradyear
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/education',(req,res)=>{
 educationModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;