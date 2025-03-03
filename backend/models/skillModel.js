const mongoose=require('mongoose')
const skillSchema=mongoose.Schema({
    skills:String
})
const skillModel=new  mongoose.model('skills',skillSchema)
module.exports=skillModel
