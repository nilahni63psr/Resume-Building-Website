const mongoose=require('mongoose')
const experienceSchema=mongoose.Schema({
    experience:String
})
const experienceModel=new  mongoose.model('experience',experienceSchema)
module.exports=experienceModel
