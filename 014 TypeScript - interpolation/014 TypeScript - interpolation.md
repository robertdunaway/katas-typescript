---
title: 014 TypeScript - interpolation

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

# 014 TypeScript - interpolation

## Duration
5 minutes

## Brief
Using string interpolation

### For more information 
BING/GOOGLE: “TypeScript interpolation”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/014%20TypeScript%20-%20interpolation/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/014%20TypeScript%20-%20interpolation/after


# Kata

Replace the following with an interpolated string.

<br>

```

	var firstName: string = 'Bob';
	var career: string = 'programmer';
	
	var newString: string = firstName + ' is a ' + career + '.'
	console.log('classic string concatination');
	console.log(newString);

	
```

<br>

The end result might look like this.

<br>

```	

	var newInterpString: string = `${firstName} is a ${career}.`;
	console.log('string interpolation');
	console.log(newInterpString);


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/014%20TypeScript%20-%20interpolation/1.png" alt="Smiley face"> 





##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 