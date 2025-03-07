const randomNumbers1 = [{id: 10}, {id:3 },{id: 4}, {id: 2}, {id: 5}];
const randomNumbers2 = [{id: 1}, {id:8 },{id: 5}, {id: 6}, {id: 9}];
const numberArray = [14, 5, 2, 3]

// Using find Array
const numbersItem = randomNumbers1.find((item)=> item.id ===3);

console.log("numbers item" , numbersItem);

//using length array
const currentItem = randomNumbers1.length;
console.log("length item" , currentItem);

//using pop array
const shorterItem = randomNumbers1.pop();
console.log("poped item", shorterItem );

//using toString array
const stringedItem = randomNumbers1.toString();
console.log("transformed to string  item", stringedItem );

//using concat array
const concatenatedItem = randomNumbers1.concat(randomNumbers2);
console.log("merged arrays",concatenatedItem );

//using map array
const newArray = numberArray.map(Math.sqrt); 
console.log("mapped array", newArray);

//using push array
const newerArray =  numberArray.push({id: 10}); 
console.log("enhanced array", newerArray);

//using reduce array with addition operation
const reducedArray = numberArray.reduce((total, number) => total+number,0);
console.log( "addition result", reducedArray);

//using sort array
const sortedArray = numberArray.sort();
console.log("sorted items", sortedArray );

//includes
const checkArray = numberArray.includes(2,0);
console.log("position of 2 ", checkArray);