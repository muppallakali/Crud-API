let express=require("express")
let cors=require("cors")
let app=express()
let bodyparser=require("body-parser")
let router=require("./route/routes")
let dotenv=require("dotenv")
dotenv.config()
let mongoose=require("mongoose")

mongoose.connect(process.env.abcd)
.then(()=>{console.log("Data base is connected")})
.catch((error)=>{
    console.log("Error in connecting to server: ",error)
})
    

app.use(bodyparser.json())
app.use(cors())
app.use("/abc",router)
app.use("/",(req,res)=>{
    res.send(<h1>Welcome to crud operations Backend</h1>)
})



port=process.env.port||3000
app.listen(port,()=>console.log(`port is running on ${port}`))
