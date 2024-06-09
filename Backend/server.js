//import express
const exp=require('express')
//create the application
const app=exp()
const expressAsyncHandler=require('express-async-handler')
app.use(exp.json())

//import the 'path' core module
let path=require('path')

//deploy react build in this server
app.use(exp.static(path.join(__dirname,'../client/build')))

let userinfocollectionObj
//import the mongodb client
let mc=require('mongodb').MongoClient
mc.connect("mongodb://localhost:27017")
.then(client=>{
    //get the database object
    let dbObj=client.db('regformdb')

    //get userinfocollection
    userinfocollectionObj=dbObj.collection('userinfocollection') 
    //set it to global
    app.set(userinfocollectionObj,'userinfocollectionObj')

    //resposing to the database connection
    console.log("DB connected")
})
.catch(err=>{
    console.log("DB not connected",err.message)
})

//posting the form details into the userinfocollectionObj   
app.post('/new-user',expressAsyncHandler(async (req,res)=>{
    //get the data body
    let userinfo=req.body
    await userinfocollectionObj.insertOne(userinfo)
    res.send({message:"User is created"})
}))

app.use((err,req,res,next)=>{
    res.send({erroremessage:err.message})
})

//assign the port number
app.listen(4000,()=>{console.log("Http server is running in 4000...")})