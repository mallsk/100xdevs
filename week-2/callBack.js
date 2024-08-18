function sum(a,b){
    return a+b;
}
function callBack(a,b, callingFunction){
    return callingFunction(a,b)
}
console.log(callBack(2,4,sum));