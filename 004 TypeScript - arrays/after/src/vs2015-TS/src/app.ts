
// Let's get started!
console.log("Let's get started!");


// New array
var list1: number[] = [1, 2, 3];
console.log('list1 array = ' + list1);

// results in the same array as the one above.  This is a style preference.
var list2: Array<number> = [1, 2, 3];
console.log('list2 array = ' + list2);


//Creating an array of type Any.
var anyList: any[] = [1, true, "three"];
console.log('anyList[] = ' + anyList);

anyList[1] = 100;
console.log('anyList[1] = ' + anyList);


// Set the length of an array structure to 10.
var list3:string[] = new Array(10);
console.log('list3 = ' + list3);
