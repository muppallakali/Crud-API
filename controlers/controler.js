let User=require("../models/models")
let userControler=async (req,res)=>{
    try{
        let {name,username,age}=req.body
        let user=new User({
            name,
            username,
            age
        })
       let saveddata= await user.save()
        res.status(200).json({message:"Data saved successfully",saveddata})
        console.log("user saved successfully",saveddata)
    }
    catch(error){
        res.status(500).json({message:"user controler error is: ",error:error.message})
        console.log("there was a problem in saving the data to database",error)
    }
}
let retrivingdata=async(req,res)=>{
    try{
        let users=await User.find()
        res.json(users)
    }
    catch(error){
        res.status(500).json({message:"Error in data visualising: ",error})
    }
}
let retrivebyid=async(req,res)=>{
    try{
        let id=req.params.id
        let user=await User.findById(id)
        if(!user){
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({message:"Error in data retrivelusingid: ",error})
    }
}
let updatebyId=async(req,res)=>{
    try{
        let{name,username,age}=req.body
        let id=req.params.id
        let updatinguser=await User.findByIdAndUpdate(id,{
            name,
            username,
            age
        })
        if (!updatinguser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message:"Data updated and saved successfully",updatinguser})
        console.log("user updated and saved successfully",updatinguser)
    }
    catch(error){
        res.status(500).json({message:"Error in updatebyId: ",error})
    }
}
let deleteuser=async(req,res)=>{
    try{
        let id=req.params.id
        let deleteduserdata=await User.findByIdAndDelete(id)
        if (!deleteduserdata) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message:"Data deleted successfully",deleteduserdata})
        console.log("user Deleted successfully",deleteduserdata)
    }
    catch(error){
        res.status(500).json({message:"Error in deleteuser: ",error})
    }
}
module.exports={userControler,retrivingdata,retrivebyid,updatebyId,deleteuser}