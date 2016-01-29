---
title: 007 TypeScript - for-in vs for-of

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

# 007 TypeScript - for-in vs for-of

## Duration
10 minutes

## Brief
Examining the difference between “for in” and “for of”.

### For more information 
BING/GOOGLE: “TypeScript for in of”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/007%20TypeScript%20-%20for-in%20vs%20for-of/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/007%20TypeScript%20-%20for-in%20vs%20for-of/after


# Kata


Create a list named “items” and add random values to it then output “items” to the console.
<br>

Create a “for…in” loop over the “items” list and ouput the results to the console.
<br>

Create a “for…of” loop over the “items” list and output the results to the console.

<br>

```typescript

	var items: string[] = ['Bob', 'and', 'Tom'];
	console.log('items = ' + items);
	
	// for in loop
	for (let item in items) {
	    console.log('for in loop: ' + item);
	}
	
	// for of loop
	for (let item of items) {
	    console.log('for of loop: ' + item);
	}


```

<br>

> NOTE: Notice “for…in” only works against the index of the list while “for…of” works against the value of each item in the list.

<br>

Create a few more arrays and loop over them.  Try something other than a string array.  Possibly take an array of numbers and add them in the loop.  Consider the scope of variables as you do.  IE: “let” is scoped to the block it’s defined in while “var” scopes to the function level.


<br>



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 