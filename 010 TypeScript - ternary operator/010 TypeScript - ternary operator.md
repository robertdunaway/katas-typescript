---
title: 010 TypeScript - ternary operator

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

# 010 TypeScript - ternary operator

## Duration
5 minutes

## Brief
Using a ternary operator (?) to check for null.

### For more information 
BING/GOOGLE: “TypeScript ternary operator ?”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/010%20TypeScript%20-%20ternary%20operator/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/010%20TypeScript%20-%20ternary%20operator/after


# Kata

Recreate the logic below with the ternary operator (?).  The ternary operator can be used to look for null but what it’s really doing is creating conditional logic based on a true/false response.  If null then false is returned.  

<br/>

```

	var myVal: number = null;
	var result: number = null;
	
	// using an if statement
	if (myVal == null) {
	    result = 0;
	}
	else {
	    result = myVal;
	}


```

<br/>

Now change the “myVal” variable to equal 5 and execute operation again.  Result is now set equal to “myVal” because “myVal” is not null.

<br/>

```

	// Using a ternary operator to check for null.
	result = myVal ? myVal : 0;
	console.log('result = myVal ? myVal : 0; // result = ' + result);
	
	myVal = 5;
	result = myVal ? myVal : 0;
	console.log('result = myVal ? myVal : 0; // result = ' + result);


```

<br/>

Create logic that checks if two values are equal.  At this point in the exercise result and myVal should both be 5 so a ternary operator will return true for (myVal = return).

<br/>


```
	
	// Using a ternary operator to evaluate.
	result = (myVal == result) ? 'myVal and result both equal ' + result : 'values are not equal';
	console.log(result);
	

```

<br/>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/010%20TypeScript%20-%20ternary%20operator/1.png" alt="Smiley face"> 


<br/>





##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 