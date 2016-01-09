---
title: 022 TypeScript - arrow function and this

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

# 022 TypeScript - arrow function and this

## Duration
10 minutes

## Brief
Using arrow functions.  

<br>

You’ll notice that “this.userId” is undefined.  Re-write the class using an arrow function so “this.userId” works.

### For more information 
BING/GOOGLE: “TypeScript arrow function this”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/022%20TypeScript%20-%20arrow%20function%20and%20this/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/022%20TypeScript%20-%20arrow%20function%20and%20this/after


# Kata


Run the application with the following code and make not of the value returned by “this.userId”.

<br>

```

(function () {
    
    // Let's get started!
    console.log("Let's get started!");

    // "this" works differently in different circumstances.
    //  In this class "this" works in a way you might now expect.
    class employee {
        userId: string;

        displayUserId() {
            setTimeout(function () {
                console.log(`"this.UserId" is: ${this.userId}`);
            }, 1000);
        }
    }

    // Creating an object of type employee.
    var myEmployee = new employee();
    myEmployee.userId = 'abc123';

    // Calling the displayUserId method.  
    // Notice "this.userId" returns "undefined".
    myEmployee.displayUserId();

})();


```

<br>

Create a new class with the “displayUserId” function as an arrow function to allow “this” to work as expected.

<br>

```

    class employee2 {
        userId: string;

        displayUserId() {
            setTimeout(() => {
                console.log(`"this.UserId" with an arror function is: ${this.userId}`);
            }, 1000);
        }
    }

    // Creating an object of type employee.
    var myEmployee2 = new employee2();
    myEmployee2.userId = 'abc123';

    // Calling the displayUserId method.  
    // Notice "this.userId" returns "abc123".
    myEmployee2.displayUserId();


```

##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 