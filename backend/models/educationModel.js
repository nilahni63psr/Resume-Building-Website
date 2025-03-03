const mongoose=require('mongoose')
const educationSchema=mongoose.Schema({
   sname:String,
   sgradyear:Number,
   degree:String,
   percentage:Number,
   gradyear:Number

})
const educationModel=new  mongoose.model('education',educationSchema)
module.exports=educationModel
