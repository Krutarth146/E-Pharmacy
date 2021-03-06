const express=require("express")
const sessionController=require("./controller/session-controller")

const app=express()
//middle ware
app.use(express.json())  //mobile -> accept json data from request and set data into body
app.use(express.urlencoded({extended:true}))  //web -->accept url encoded data from request and set data into body

app.get("/",function(req,res){
    res.write("Welcome....")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)


app.listen(3001,function(){
    console.log("Server Started on 3001")
})