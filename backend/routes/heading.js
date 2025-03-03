var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var headModel=require('../models/headingModel')
router.post('/contact',(req,res)=>{
  let user=new headModel({
   fname:req.body.fname,
   lname:req.body.lname ,
   prof: req.body.prof,
   city: req.body.city,
   country: req.body.country,
   phone: req.body.phone,
   email: req.body.email,
   linkedin:req.body.linkedin,
   profile:req.body.profile
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/contact',(req,res)=>{
 headModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;