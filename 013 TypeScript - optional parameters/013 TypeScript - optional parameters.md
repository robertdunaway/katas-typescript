---
title: 013 TypeScript - optional parameters

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

# 013 TypeScript - optional parameters

## Duration
10 minutes

## Brief
Using required, optional, and default parameters. Also an example of interpolation.

### For more information 
BING/GOOGLE: “TypeScript optional default parameters interpolation”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/013%20TypeScript%20-%20optional%20parameters/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/013%20TypeScript%20-%20optional%20parameters/after


# Kata

Create a function that accepts several required parameters and outputs an interpolated string to the console.

<br>

```

	// Create a function that accepts several parameters.
	// These parameters are required by default.
	var profile = function (fName: string, lName: string, age?: number
	    , height?: number, weight?: number): string {
	
	    // String interpolation
	    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	    return '';
	}
	console.log('all parameters are required');
	profile('John', 'Smith', 35, 180, 165);


```

<br>


Create a function with a couple required parameters and a few optional parameters.

<br>

```

	// Create a function where only fName and lName are required and the rest
	// are optional.
	var profileWithOptions = function (fName: string, lName: string, age?: number
	    , height?: number, weight?: number): string {
	
	    // String interpolation
	    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	    return '';
	}
	console.log('example of optional parameters');
	profileWithOptions('John', 'Smith');


```

<br>

Create a function with a couple required parameters and a few default parameters.
 
<br>

```

	// Create function with default parameters.
	var profileWithDefaults = function (fName: string, lName: string, age: number = 18
	    , height: number = 150, weight: number = 100): string {
	
	    // String interpolation
	    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	    return '';
	}
	console.log('example of default parameters');
	profileWithDefaults('John', 'Smith');
	profile('John', 'Smith', 35, 180, 165);


```

<br>


 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/013%20TypeScript%20-%20optional%20parameters/1.png" alt="Smiley face">



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 