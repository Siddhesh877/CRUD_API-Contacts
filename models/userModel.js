const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter username"],
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:[true,"This email is already in use"],
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        
    }
},{
    timestamps:true,
})
module.exports=mongoose.model("User",userSchema);