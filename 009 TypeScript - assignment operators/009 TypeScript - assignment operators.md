---
title: 009 TypeScript - assignment operators

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

# 009 TypeScript - assignment operators

## Duration
10 minutes

## Brief
Using assignment operators `(=, +=, -=, *=, /=, %=)`.

### For more information 
BING/GOOGLE: “TypeScript assignment operators”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/009%20TypeScript%20-%20assignment%20operators/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/009%20TypeScript%20-%20assignment%20operators/after


# Kata


Create two variables of type number for working with assignment operators

<br>

```typescript

	var a: number = 10;
	var b: number = 5;


```

<br>

Output to the console the results of assignment operators `(=, +=, -=, *=, /=, %=)`

<br>

```typescript

	var a: number = 10;
	var b: number = 5;
	var result: number = 0;
	
	result = a + b;
	console.log('result = a + b; // result =' + result);
	
	result += a;
	console.log('result += a; // result =' + result);
	
	result -= a;
	console.log('result -= a; // result =' + result);
	
	result *= 2;
	console.log('result *= 2; // result =' + result);
	
	result /= a;
	console.log('result /= a; // result =' + result);
	
	result %= 2;
	console.log('result %= 2; // result =' + result);


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/009%20TypeScript%20-%20assignment%20operators/1.png" alt="Smiley face"> 



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 