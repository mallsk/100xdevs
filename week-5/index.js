const express = require('express');
const cors = require('cors');
const app = express();

//Not working, to be fixed
app.use(cors({
  origin: 'http://localhost:5500/week-5/fetch.html', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
}));

//Creating a middleware function
function middleWare(req,res,next){
  console.log("Reached the middleware");
  next();
}

app.get("/add",middleWare,(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const add = a + b;
  res.json({
    answer : add
  })
})

app.get("/sub", function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer : a - b
  })
  
})

app.get("/multiply", function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    answer : a * b
  })
})

app.get("/divide", function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    answer : a / b
  })
})

app.listen(3001);