const express = require("express");
const app = express();
const db = require("./db/ntpot");
const bodyParser = require("body-parser");
const dataAdb = require("./abdhoney.json");
const os = require("os");
var cors = require('cors')
 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/ntpotData", async (req, res) => {
  const allData = await db.getAllData();
  res.status(200).json({ allData });
});
app.get("/adbData", async (req, res) => {
  res.status(200).json({ dataAdb });
});

app.get("/mem", async (req, res) => {
  res.json({ total: os.totalmem(), free: os.freemem() });
});


app.get("/processor", async(req,res) => {
  res.json({})
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
