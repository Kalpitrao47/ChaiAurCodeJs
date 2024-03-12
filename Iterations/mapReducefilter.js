// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

const myarray = [1,5,4,6,3,2,8,7,9,4,5,6,3,11,15,45,62,78,15]

const result = myarray.filter((res)=>{
    return res<9
})

console.log(result);

const books = [
    {'title': 'Book 1', 'author': 'sdv','genre': 'fddf','publisher': '154'},
    {'title': 'Book 2', 'author': 'sdjsdah','genre': 'fhcb','publisher': '154'},
    {'title': 'Book 3', 'author': 'fd','genre': 'fddewfdhw','publisher': '154'},
    {'title': 'Book 4', 'author': 'fdhh','genre': 'edyj','publisher': '154'},
    {'title': 'Book 5', 'author': 'ewj','genre': 'jkd','publisher': '154'},
    {'title': 'Book 6', 'author': 'jer','genre': 'jmqw','publisher': '154'},
    {'title': 'Book 7', 'author': 'jrg','genre': 'njhwq','publisher': '154'},
    {'title': 'Book 8', 'author': 'lr','genre': 'lqk','publisher': '154'},
    {'title': 'Book 9', 'author': 'rk','genre': 'kql','publisher': '154'},
    {'title': 'Book 10', 'author': 'edgu','genre': 'fqwe','publisher': '154'},

]

const bookfilter = books.filter((book) => book.title === 'Book 5')
console.log(bookfilter);

//Now same we can do with foreach method
const newnums = [];
const result3 = myarray.forEach((resuu)=>{
    if (resuu>10) {
        newnums.push(resuu);
    }
})
console.log(newnums);


// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

const yourArray = [4,5,1,2,48,62,5,478,95,42,15,63,45]

const result2 = yourArray.map((resu)=>{
    return (
        resu>10
    )
})

console.log(result2);

//Map Chaining
const mapChain = [,1,32,3,4,5,6,7,8,9]
let mapCahinResult = mapChain.map((mapC)=>mapC*10)
                             .map((mapC)=>mapC+1)
                             .filter((mapC)=>mapC>50)
console.log("mapCahinResult",mapCahinResult);



//React Filter code 
// const filterItem = (curcat) => {
//     const newItem = Data.filter((newVal) => {
//       return newVal.category === curcat; 
//         	// comparing category for displaying data
//     });
//     setItem(newItem);
//   };


