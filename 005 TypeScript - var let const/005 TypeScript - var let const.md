---
title: 005 TypeScript - var let const

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

# 005 TypeScript - var let const

## Duration
10 minutes

## Brief
Working with var, let, and const and their scopes.

### For more information 
BING/GOOGLE: “TypeScript var let const”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/005%20TypeScript%20-%20var%20let%20const/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/005%20TypeScript%20-%20var%20let%20const/after


# Kata

Create a few variables with “var”, “let”, and “const”.

<br>
```typescript

	var myVar: number = 111;
	let myLet: number = 222;
	const myConst: number = 333;


```
<br>

Demonstrate what happens when declaring a variable with “var” in the root and then again inside a block statement like foreach or if(true).
Here is one possible example:

<br>

```typescript

	if (true) {
	    var myVar: number = 444;
	}
	console.log('myVar = ' + myVar);


```

<br>

Demonstrate what happens when doing the same with a variable declared with “let”.

<br>

```typescript

	if (true) {
	    let myLet: number = 555;
	}
	console.log('myLet = ' + myLet);


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/005%20TypeScript%20-%20var%20let%20const/1.png" alt="Smiley face"> 


<br>


Try changing the value of the constant you created earlier.  You will receive error message, at design time, explaining why you can’t change the value.

<br>
```typescript

	myConst = 123;


```

<br>

Maybe you think you can just ignore this message and fall back on the Gulp task to transpile this errant TypeScript code.

<br>

You’d be wrong…

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/005%20TypeScript%20-%20var%20let%20const/2.png" alt="Smiley face"> 


<br>


##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 