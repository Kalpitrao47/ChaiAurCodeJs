// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//     if(element === 5){
//         console.log("Reached 5")
//     }    
// }


// //debugger
// for (let i = 0; i <= 10; i++) {
//     console.log(`OuterLoop${i}`);
//    for (let j = 0; j <=10 ; j++) {
//         // console.log(`Innerloop${j}`);
//         console.log(`Multiplication of ${i} table ${i}*${j} = ${i*j}`);
//    }    
// }


// const myArray = ["Flash","Superman","Batman",1,2,4,5,6]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }


// //break and continue
// for (let i = 0;i<=20;i++){
//     if(i == 6){
//         console.log("Value detected 6");
//         break;
//     }
// }
// for (let i = 0;i<=20;i++){
//     if(i == 6){
//         console.log("Value detected 6");
//         continue;
//     }
//     console.log(i);
// }

// Write a program to print following :
// **********
// **********
// **********
// **********

// let numRows = 4
// let numColumns = 10
// // debugger
// for(let i = 0; i<numRows;i++){
//     let row = '*'
//     for (let j = 0; j < numColumns; j++) {
//         row+='*'  //The line row += '*'; is shorthand for appending an asterisk (*) to the variable row. It's equivalent to row = row + '*';. This line is used inside the inner loop to build the string of asterisks for each row.
//     }
//     console.log(row)
// }

// *
// **
// ***
// ****
// *****

// let numRows = 5;
// for (let i = 1; i <= numRows; i++){
//     let row = '';
//     for (let j=1;j<=i;j++){
//         row+='*';
//     }
//     console.log(row);
// }

// 1
// 22
// 333
// 4444
// 55555

// let numRows = 5;
// for(let i = 1; i<=numRows; i++){
//     let row = '';
//     // console.log(row);
//     for(let j=1; j<=i;j++){
//         row+= i;
//     }
//     console.log(row);
// }


// var numbersArray = [14,21,58,75];
// var sum = 0;

// for(var i = 0; i < numbersArray.length; i++){
//     sum = sum + numbersArray[i];
// }
// console.log(sum);