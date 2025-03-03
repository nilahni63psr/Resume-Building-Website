const mongoose=require('mongoose')
const contactSchema=mongoose.Schema({
   fname:String,
   lname:String ,
   prof: String,
   city: String,
   country: String,
   phone: Number,
   email: String,
   linkedin:String,
   profile:String

})
const headModel=new  mongoose.model('contact',contactSchema)
module.exports=headModel
