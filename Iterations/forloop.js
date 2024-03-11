// const name = ["KalpitRaorane"];

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//     if(element === 5){
//         console.log("Reached 5")
//     }    
// }


// debugger
// for (let i = 0; i <= 10; i++) {
//     console.log(`OuterLoop${i}`);
//    for (let j = 0; j <=10 ; j++) {
//         // console.log(`Innerloop${j}`);
//         console.log(`Multiplication of ${i} table ${i}*${j} = ${i*j}`);
//    }    
// }


const myArray = ["Flash","Superman","Batman",1,2,4,5,6]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}


//break and continue
for (let i = 0;i<=20;i++){
    if(i == 6){
        console.log("Value detected 6");
        break;
    }
}