---
title: 012 TypeScript - simple functions

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

# 012 TypeScript - simple functions

## Duration
10 minutes

## Brief
Create simple, anonymous, and arrow functions.

### For more information 
BING/GOOGLE: “TypeScript functions”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/012%20TypeScript%20-%20simple%20functions/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/012%20TypeScript%20-%20simple%20functions/after


# Kata

Create a simple function that adds two numbers.

<br>
```typescript

	// Create a simple 'add' function.
	function add(a: number, b: number): number {
	    return a + b;
	}
	console.log('named function');
	console.log('5 + 2 = ' + add(5, 2));


```

<br>

Create an anonymous function that adds two numbers.

<br>

```typescript

	// Create an ananymous 'add' function.
	var add2 = function (a: number, b: number): number {
	    return a + b;
	}
	console.log('anonymous function');
	console.log('5 + 5 = ' + add2(5, 5));


```
<br>

Create an arrow function that adds two numbers.

<br>

```typescript

	// Create a function using the arrow function.
	var add3 = (a: number, b: number): number => {
	    return a + b;
	}
	console.log('arrow function');
	console.log('10 + 5 = ' + add3(10, 5));


```




##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 