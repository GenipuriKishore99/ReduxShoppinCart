var express=require("express")
var cors=require("cors")
var mongoClient=require("mongodb").MongoClient;
var constr="mongodb://127.0.0.1:27017";

var app=express();

app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.get("/user",(req,res)=>{
    mongoClient.connect(constr)
    .then((obj)=>{
        var database=obj.db("tutorial")
        database.collection("employee").find({}).toArray().then((docu)=>{
            res.send(docu)
            res.redirect("/user")
        })
        .catch((err)=>{
            console.log(err)
        })
    })
})

app.post("/user",(req,res)=>{
    var details={
        "UserName":req.body.UserName,
        "Email":req.body.Email,
        "Age":parseInt(req.body.Age),
        "Phone":parseInt(req.body.Phone)
    }
    mongoClient.connect(constr)
    .then((obj)=>{
        var db=obj.db("tutorial")
        db.collection("employee").insertOne(details).then(()=>{
            // console.log("data inserted")
            res.redirect("/user")
        })
    })
})

app.listen("5000")
console.log(`server started:http://127.0.0.1:5000`)