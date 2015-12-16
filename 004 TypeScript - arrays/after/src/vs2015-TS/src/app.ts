
// Let's get started!
console.log("Let's get started!");


// New array
var list1: number[] = [1, 2, 3];

// results in the same array as the one above.  This is a style preference.
var list2: Array<number> = [1, 2, 3];

console.log('list1 array = ' + list1);


//Creating an array of type Any.
var anyList: any[] = [1, true, "free"];
anyList[1] = 100;

console.log('anyList[] = ' + anyList);


// Set the length of an array structure to 10.
var list3:string[] = new Array(10);

console.log('list3 = ' + list3);
