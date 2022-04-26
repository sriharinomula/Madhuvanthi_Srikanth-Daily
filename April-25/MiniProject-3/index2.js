const express=require("express");
const cors =require('cors');
const mongoDB = require('mongodb');

const mongoClient = mongoDB.MongoClient;

const dburl="mongodb+srv://admin:admin@cluster0.fz0xr.mongodb.net/MiniProject?retryWrites=true&w=majority"
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.get('/feedback/all',async (req,res) => {
    const client = await mongoClient.connect(dburl);
      console.log("Running");
    try{
    let db = await client.db('MiniProject');
    let data = await db.collection('Feedbacks').find().toArray();
    res.json(data)
    }catch(err){console.log(err);}finally{client.close();}
    });
 
    app.post('/feedback/new', async (req,res) => {
          const client = await mongoClient.connect(dburl);
    try{  
    let db = await client.db('MiniProject');
    let q = await db.collection('Feedbacks').insertOne(req.body);
 
    res.json({   message: "POST Sucessful!" })
    
    }catch(err){
    console.log(err);
    }finally{
    client.close();}
    });
    app.use('*',(req,res)=>{
        res.send("not found");
    })
    app.get("/showfeedbacks", async (req, res, next) => {
        const client = await mongoClient.connect(dburl);
        try {
          const db = await client.db("MiniProject");
          const users = await db.collection("Feedbacks").find().toArray();
          console.log(users);
          res.render("user-feedbacks", { users: users ,
        feedback: feedback});
        } catch (error) {
          console.log(error);
        } finally {
          client.close();
        }
      });
      app.post("/user/feedback", cors(corsOptions), async (req, res) => {
        const client = await mongoClient.connect(dburl);
        try {
          const db = await client.db("MiniProject");
          const user = await db.collection("Feedbacks").insertOne(req.body);
          res.json({ message: "user created", user ,feedback });
        } catch (error) {
          console.log(error);
        } finally {
          client.close();
        }
        console.log(req.body);
      });
    
app.listen(8080,()=>console.log("Listening..."))