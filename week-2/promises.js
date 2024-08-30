function promisifiedSum(a,b){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            console.log(a+b)
            resolve("success");
        },
        1000);
    })
}
promisifiedSum(2,4).then(()=>{
    console.log("Pass");
});