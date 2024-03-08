const arr = [2,4,4,54,"Kalpit",true];
console.log(arr);
console.log(arr[3]);
//Shallow Copy and Deep Copy
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


const myHeroes = ["Shaktiman","Batman "];
const myArr2 = new Array(1,2,3,4,5,6,7,8);

//Array Methods
 
arr.push(6);//adds 6 at the last of the array   
arr.pop();//removes the last element of the array
arr.unshift(0);//add 0 at the start of the array
arr.shift();//removes the first element of the array

console.log(arr);
const newArr = arr.join(",");//converts the value to string comma seperated.
console.log(newArr);
//slice and splice
//The slice() method extracts a part of a string.
//The slice() method returns the extracted part in a new string.
//The slice() method does not change the original string.

//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.

const myn1 = arr.slice(1,3);
console.log(myn1);
console.log(arr);//
const myn2 = arr.splice(1,3);
console.log(myn2);
console.log(arr);

