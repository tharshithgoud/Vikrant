const express = require("express");
const app = express();
const db = require("./db/ntpot");
const bodyParser = require("body-parser");
const dataAdb = require("./abdhoney.json");
const cicJs = require("./cic.json");
const os = require("os");
var cors = require('cors')
const jwt = require('jsonwebtoken')
 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/login",async(req,res)=>{
  if(req.body.user=="vit"&&req.body.pass=="Vit@123"){
    const token = jwt.sign({
        user:req.body.user,
    },'secret123')
    return res.json({status:'ok',user:token})
  }
  else{ 
    return res.json({status:'error',user:false})
  }
})


app.get("/ntpotData", async (req, res) => {
  const allData = await db.getAllData();
  res.status(200).json({ allData });
});


app.get("/adbData", async (req, res) => {
  res.status(200).json({ dataAdb });
});
app.get("/cicData",async(req,res)=>{
  res.status(200).json({cicJs});
})

app.get("/mem", async (req, res) => {
  res.json({ total: os.totalmem(), free: os.freemem() });
});


app.get("/processor", async(req,res) => {
  res.json({total:Math.floor(Math.random() * (70 - 60 + 1) + 60)})
})

app.get("/attackcount", async (req, res) => {
  const countntp = await db.countAttack();
  const finalCount = dataAdb.length + countntp.CNT;
  res.json({ count: finalCount });
});

app.get("/post", async (req, res) => {
  console.log(req.body);
});

app.listen(3002, () => console.log("Server started"));
