var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var experienceModel=require('../models/experienceModel')
router.post('/experience',(req,res)=>{
  let user=new experienceModel({
   experience:req.body.experience
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/experience',(req,res)=>{
 experienceModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;