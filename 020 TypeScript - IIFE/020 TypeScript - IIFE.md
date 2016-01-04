---
title: 020 TypeScript - IIFE

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

# 020 TypeScript - IIFE

## Duration
5 minutes

## Brief
Wrapping functions with IIFE to protect the global namespace.

### For more information 
BING/GOOGLE: “TypeScript IIFE”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/020%20TypeScript%20-%20IIFE/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/020%20TypeScript%20-%20IIFE/after


# Kata

Apply the IIFE design pattern to each function.  Use the dashes to indicate the boundaries of the IIFE.

<br>

```


	    // Wrap this simple function in IIFE
	    function add(a: number, b: number): number {
	        return a + b;
	    }
	    console.log('5 + 2 = ' + add(5, 2));
	
	
	
	// add is not recognized here.
	//console.log('5 + 2 = ' + add(5, 2));
	
	

	    // Wrap this function in IIFE
	    var add2 = function (a: number, b: number): number {
	        return a + b;
	    }
	    console.log('anonymous function');
	    console.log('5 + 5 = ' + add2(5, 5));
	
	
	

	    // Wrap this function in IIFE
	    var add3 = (a: number, b: number): number => {
	        return a + b;
	    }
	    console.log('arrow function');
	    console.log('10 + 5 = ' + add3(10, 5));
	
	
	
	

	    // Wrap this function in IIFE
	    var profile = function (fName: string, lName: string, age?: number
	        , height?: number, weight?: number): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('all parameters are required');
	    profile('John', 'Smith', 35, 180, 165);
	
	
	
	

	    // Wrap this function in IIFE
	    var profileWithOptions = function (fName: string, lName: string, age?: number
	        , height?: number, weight?: number): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('example of optional parameters');
	    profileWithOptions('John', 'Smith');
	
	
	

	
	    // Wrap this function in IIFE
	    var profileWithDefaults = function (fName: string, lName: string, age: number = 18
	        , height: number = 150, weight: number = 100): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('example of default parameters');
	    profileWithDefaults('John', 'Smith');
	
	

	    // Wrap this function in IIFE
	    for (var index: number = 0; index < 10; index++) {
	        console.log(index);
	    }
	
	

	    // Wrap this function in IIFE
	    var myNumber: number = 5;
	    for (var multiplier = 1; multiplier <= 10; multiplier++) {
	        var result = myNumber * multiplier;
	
	        console.log(`${myNumber} * ${multiplier} = ${result}`);
	    }
	
	


```

<br>

The end result should be...

<br>

```

	(function () {
	    // Wrap this simple function in IIFE
	    function add(a: number, b: number): number {
	        return a + b;
	    }
	    console.log('5 + 2 = ' + add(5, 2));
	
	})();
	
	// add is not recognized here.
	//console.log('5 + 2 = ' + add(5, 2));
	
	
	(function () {
	    // Wrap this function in IIFE
	    var add2 = function (a: number, b: number): number {
	        return a + b;
	    }
	    console.log('anonymous function');
	    console.log('5 + 5 = ' + add2(5, 5));
	})();
	
	
	(function () {
	    // Wrap this function in IIFE
	    var add3 = (a: number, b: number): number => {
	        return a + b;
	    }
	    console.log('arrow function');
	    console.log('10 + 5 = ' + add3(10, 5));
	
	})();
	
	
	(function () {
	    // Wrap this function in IIFE
	    var profile = function (fName: string, lName: string, age?: number
	        , height?: number, weight?: number): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('all parameters are required');
	    profile('John', 'Smith', 35, 180, 165);
	
	})();
	
	
	(function () {
	    // Wrap this function in IIFE
	    var profileWithOptions = function (fName: string, lName: string, age?: number
	        , height?: number, weight?: number): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('example of optional parameters');
	    profileWithOptions('John', 'Smith');
	})();
	
	
	(function () {
	
	    // Wrap this function in IIFE
	    var profileWithDefaults = function (fName: string, lName: string, age: number = 18
	        , height: number = 150, weight: number = 100): string {
	
	        // String interpolation
	        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);
	
	        return '';
	    }
	    console.log('example of default parameters');
	    profileWithDefaults('John', 'Smith');
	})();
	
	(function () {
	    // Wrap this function in IIFE
	    for (var index: number = 0; index < 10; index++) {
	        console.log(index);
	    }
	})();
	
	(function () {
	    // Wrap this function in IIFE
	    var myNumber: number = 5;
	    for (var multiplier = 1; multiplier <= 10; multiplier++) {
	        var result = myNumber * multiplier;
	
	        console.log(`${myNumber} * ${multiplier} = ${result}`);
	    }
	
	})();


```

<br>



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 