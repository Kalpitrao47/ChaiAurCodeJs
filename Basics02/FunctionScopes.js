console.log(abc(5));//This will give the output
function abc(num){
    return num*num;
}


console.log(MulNum(6));//This will give error:Uncaught ReferenceError: Cannot access 'MulNum' before initialization
const MulNum = function(num){
    return num*num;
}    

console.log(Num(10));//This will give error:Uncaught ReferenceError: Cannot access 'MulNum' before initialization
let Num = (num) => {
    return num*num;
}

