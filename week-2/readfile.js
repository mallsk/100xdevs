const fs = require('fs');
const result = fs.readFile('a.text','utf-8',(err,data)=>
    {
        if(err){
        console.log("Error",err);
        }
         else{
        console.log(data);
        }
    }
)