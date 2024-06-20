const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const qrCode = require ("qrcode");


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) =>{
    res.render("index");
});
let stockage = []
let objetTableau = {
  
}
app.post("/donnees",(req,res)=>{
const URLlong = req.body.URLlong;
const URLCourt = req.body.URLCourt;

if(URLCourt===""){
  let a= strRandom("Beverly")
  objetTableau.URLlong=URLlong;
  objetTableau.URLCourt=a
  stockage.push(objetTableau)
  objetTableau = {}
  res.send(stockage)

}
else{
  objetTableau.URLlong=URLlong;
  objetTableau.URLCourt=URLCourt
  stockage.push(objetTableau)
  objetTableau = {}
  res.send(stockage)
}


})





function strRandom(o) {
  var a = 10,
      b = 'abcdefghijklmnopqrstuvwxyz',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}




const port = 3007;

app.listen(port, function () {
  console.log(`l'application ecoute sur le port ${port}`);
  console.log(`l'application est disponible sur http://localhost:${port}`);
});