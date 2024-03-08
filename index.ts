// 24,More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
 
// equality test
console.log("uzma" === "uzma");

// inequality test
console.log("uzma" != "25" as string);

// test using lowercase function
console.log("UZMA".toLowerCase() === "uzma");

// Numerical tests involving equality and inequality,
console.log( 5289 === 5289);
console.log( 52 != 89 as number);

// greater than test
console.log( 20 > 15);

//less than test
console.log( 20 > 15);

//greater than or equal to,
console.log(20 >= 20);

//less than or equal to,
console.log(4<= 5);

// • Tests using "and" operators
console.log( 5===5 && 10>5);

// • Tests using "and" operators
console.log( 5===5 || 5>10);

// • Test whether an item is in a array
const cityName: string[]= ["karachi","lahore","islamabad"];
console.log(`is "karachi" in the array: `, cityName.includes('karachi'));


// • Test whether an item is not in a array
let fruits: string[]= ["orange","pair","mango"];
console.log(`test "apple" is in the array: `, !fruits.includes("apple"));































