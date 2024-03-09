function abc(){
    console.log("abc")
}
abc();

function xyz(x,y,z){
    return (
        x*y*z
    )
}

console.log(xyz(7,2,3));

function CalculateCartPrice(...price){
    return price
}

console.log(CalculateCartPrice(100,200,300,400));

//Interview quetion

function calci(val1,val2,...prices){
    
    return prices
}

console.log(calci(100,200,300,400,500,600,700));



const user ={
    name:"John",
    age:27,
    city:"New York"
}

function GetUser(anyObject){
    console.log(`HEllo this ${anyObject.name} and my age is ${anyObject.age}`)
}
GetUser(user);