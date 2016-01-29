---
title: 001 TypeScript - declare variables

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

# 001 TypeScript - declare variables

## Duration
5 minutes

## Brief
Declaring variables

### For more information 
BING/GOOGLE: “TypeScript variables”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github

 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/001%20TypeScript%20-%20declare%20variables
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/001%20TypeScript%20-%20declare%20variables/after

# Kata

Using the [before/src/app.ts] file do the following:

 - Create variables “`variableA`”, “`variableB`”, and “`variableC`” of type number.
 - Now set each of the variables to some default values.  Possibly 2, 3, and 4.
 - Now save the file.  
  - If you have the “`Task Runner Explorer`” tab open then you’ll notice Gulp processing the file just as you save it.
  - If you look at app.ts and app.js in the wwwroot folder you’ll notice that you’re changes suddenly appear there.  This is the power of a build tool like Gulp.
  - Not only has Gulp moved your changes to the `wwwroot` folder but it also created a minified `app.js` file and an `app.js.map` file which links your TS file to your JS file within the browser.  This enables you to set debug breakpoints on your TS file even though your browser has no idea what a TS file is.

```typescript

	// Let's get started!
	console.log("Let's get started!");
	
	var variableA: number = 2;
	var variableB: number = 3;
	var variableC: number = 4;


```

<br/>

You can also create new variables where its type must be inferred. 

<br/>

```typescript

	var inferredvariable = 5;


```

<br/>

You can also create new variables where the type is defined but with no initial value. 

<br/>

```typescript

	var noInitialValue: number;


```

<br/>

Write out your values to the console. 

<br/>

```typescript

	console.log("variableA + variableB + variableC =" + variableA + variableB + variableC);
	console.log("inferredvariable = " + inferredvariable);
	console.log("noInitialValue = " + noInitialValue);


```

<br/>


 - Run your project and when the web page loads press F12.
 - Select the Console window and you should see the following, in Chrome.


####Console Window

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/001%20TypeScript%20-%20declare%20variables/1.png" alt="Smiley face" > 

<br/>

Select the “Sources” tab to view any file the browser has downloaded.  In this case the TypeScript file we’ve been using is selected with a breakpoint at line 15.  The browser has no idea what TypeScript is but because we have also provided a “*.map” file the browser is able to break in the TypeScript file.

####TypeScript file with a breakpoint

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/001%20TypeScript%20-%20declare%20variables/2.png" alt="Smiley face" > 

<br/>

##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 