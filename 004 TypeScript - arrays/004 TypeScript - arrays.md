---
title: 004 TypeScript – arrays

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

# 004 TypeScript – arrays

## Duration
10 Minutes

## Brief
Using arrays

### For more information 
BING/GOOGLE: “TypeScript arrays”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/004%20TypeScript%20-%20arrays/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/004%20TypeScript%20-%20arrays/after


# Kata

Create an array named “list1” with the values 1, 2, 3.  Send result to the console.

<br>

```

	// New array
	var list1: number[] = [1, 2, 3];
	console.log('list1 array = ' + list1);



```

<br>


 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/004%20TypeScript%20-%20arrays/1.png" alt="Smiley face" > 

<br/>


Create an array named “list2” with values 1,2,3.  This time use a generic array. Send result to the console.

<br/>

```

	// results in the same array as the one above.  This is a style preference.
	var list2: Array<number> = [1, 2, 3];
	console.log('list2 array = ' + list2);


```

<br/>


 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/004%20TypeScript%20-%20arrays/2.png" alt="Smiley face" > 

<br/>

Create an array named “anyList” with values 1,true,”three”.  This time use type any to create the array. Send result to the console.

<br/>

```

	//Creating an array of type “any”.
	var anyList: any[] = [1, true, "three"];
	console.log('anyList[] = ' + anyList);
	anyList[1] = 100;
	console.log('anyList[] = ' + anyList);


```


<br/>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/004%20TypeScript%20-%20arrays/3.png" alt="Smiley face" > 

<br/>

Create an array named “list3” of type “string” and set its length to 10.  Send result to the console.


<br/>

```
	
	// Set the length of an array structure to 10.
	var list3:string[] = new Array(10);
	console.log('list3 = ' + list3);


```

<br/>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/004%20TypeScript%20-%20arrays/4.png" alt="Smiley face" > 




##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 