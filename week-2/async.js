function firstName(name){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log(name);
            resolve(200);
        },3000);
    })
}

async function names(){
    await firstName("Mallikarjun");
    await firstName("SK");
}
names();