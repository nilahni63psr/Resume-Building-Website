var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var achievementsModel=require('../models/achievementsModel')
router.post('/achievements',(req,res)=>{
  let user=new achievementsModel({
   achievements:req.body.achievements
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/achievements',(req,res)=>{
 achievementsModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;
