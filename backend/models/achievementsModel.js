
const mongoose=require('mongoose')
const achievementsSchema=mongoose.Schema({
    achievements:String
})
const achievementsModel=new  mongoose.model('achievements',achievementsSchema)
module.exports=achievementsModel

