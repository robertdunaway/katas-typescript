---
title: 018 TypeScript - arrays using an interface

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

# 018 TypeScript - arrays using an interface

## Duration
10 minutes

## Brief
Creating arrays using interfaces.

### For more information 
BING/GOOGLE: “TypeScript arrays interface”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/018%20TypeScript%20-%20arrays%20using%20an%20interface/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/018%20TypeScript%20-%20arrays%20using%20an%20interface/after


# Kata

Create a basic string array and send its content to the console.

<br>
```

	var pets: string[] = ['Jasmin', 'Roxie', 'Sally', 'Rush'];
	console.log(pets);


```
<br>

Create an interface.

<br>
```

	interface pet {
	    name: string;
	    age: number;
	    weight: number;
	}


```

<br>

Create an empty array based on the pet interface.

<br>
```
	var complexPetsArray: pet[] = [];
```
<br>

Push each dog onto the new array.

<br>
```

	complexPetsArray.push({
	    name: 'Jasmin',
	    age: 9,
	    weight: 55
	});


```

<br>

Create a new object of type pet and push it onto the array.

<br>

```

	var roxie: pet = {
	    name: 'Roxie',
	    age: 6,
	    weight: 85
	}
	
	complexPetsArray.push(roxie);
	
	console.log(complexPetsArray);


```

<br>

Create an array of the last two dogs, 'Sally' and 'Rush' then push the array onto the complexPetsArray and output to the console..

<br>

```

	var myPets: pet[] = [{ name: 'Sally', age: 18, weight: 85 },
	                     { name: 'Rush', age: 15, weight: 45}];
	
	// complexPetsArray.push(myPets);


```

<br>

We are not allowed to do this but we can use a foreach loop and get it done that way.

<br>

Loop over myPets and push each onto the complexPetsArray and output to the console.

<br>

```

	for (var p of myPets) {
	    complexPetsArray.push(p);
	}
	
	console.log(complexPetsArray);


```

<br>

End result


<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/018%20TypeScript%20-%20arrays%20using%20an%20interface/1.png" alt="Smiley face"> 
 

##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 