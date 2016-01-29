---
title: 006 TypeScript - union type

tags: 
- AngularJS
- Gulp
- Bower
- npm
- nodejs
- github
- Visual Studio Code
- JavaScript
- TypeScript

---

###http://robertdunaway.github.io

##[TypeScript code kata list](http://mycodekatas.github.io/typescript.html)
##[All code kata lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 

# 006 TypeScript - union type

## Duration
5 minutes

## Brief
How to use a union type.

### For more information 
BING/GOOGLE: “TypeScript union type”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/006%20TypeScript%20-%20union%20type/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/006%20TypeScript%20-%20union%20type/after


# Kata

Enter the following code to start off this kata.
<br>
```typescript

	// declare your union type variable for 3 different types.
	var myUnionVar: string | number | boolean;
	console.log('myUnionVar before setting a value = ' + myUnionVar);
	
	myUnionVar = 5;
	console.log('typeof myUnionVar = ' + typeof myUnionVar);


```

<br>

When you execute this code you’ll find that, at this point, the myUnionVar is undefined.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/006%20TypeScript%20-%20union%20type/1.png" alt="Smiley face"> 


<br>


Set the myUnionVar to the number 5 and then use the “typeof” operator to determine the type of the union type variable.

<br>

```typescript

	myUnionVar = 5;
	console.log('typeof myUnionVar = ' + typeof myUnionVar);


```

<br>


 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/006%20TypeScript%20-%20union%20type/2.png" alt="Smiley face"> 


<br>

A common scenario, ideal for union types, is when you don’t know if you are receiving a “thing” or an array of “things”.
<br>

Create a Union Type variable that can receive a single number or an array of numbers.  Execute a simple “if” statement against the new variable and send output to the console window.
<br>

```typescript

var myUnionNumber: number | number[];

myUnionNumber = 100;

if (typeof myUnionNumber === 'number') {
    console.log('myUnionNumber is a number');
}
else {
    console.log('myUnionNumber is now an object');
}

myUnionNumber = [100, 200, 300];

if (typeof myUnionNumber === 'object') {
    console.log('myUnionNumber is now an object');
}
else {
    console.log('myUnionNumber is a number');
}


```

<br>

While we are at it, let’s go ahead and save the “typeof” result to another variable and then use that variable in a “switch” statement and output the result again.  Why not!

<br>

```typescript

// use a switch statement around the typeof command.
var myVarType: string = typeof myUnionNumber;

switch (myVarType) {
    case 'number':
        {
            console.log('myUnionNumber is a number');

            break;
        }
    case 'object':
        {
            console.log('myUnionNumber is now an object');
            break;
        }
}


```



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 