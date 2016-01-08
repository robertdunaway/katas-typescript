---
title: 021 TypeScript - callbacks

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

# 021 TypeScript - callbacks

## Duration
10 minutes

## Brief
Functions can be passed into other functions and returned from functions.  Passing functions into another function is a call back.

### For more information 
BING/GOOGLE: “TypeScript callbacks”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/021%20TypeScript%20-%20callbacks/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/021%20TypeScript%20-%20callbacks/after


# Kata

Create a simple function that you can use as a callback function that only outputs some short text message to the console.
<br>

Create a function that accepts a function as a callback and then calls the callback function.
<br>

Now call your new function and pass in your simple output function.

<br>

```

    // create a function to be used as a callback.  This is our callback function.
    var myCB = function () {
        console.log('The callback just ran...');
    };

    // create a function and pass in the callback method.
    function myFunction(cb: () => void) {
        cb();
    }

    myFunction(myCB); // calling the new function and pass in the callback.


```

<br>

Now create a new function, used as a callback, that accepts a value that will be outputted to the console log.

<br>

Create a function that receives the callback as a parameter and calls the callback.  This function should accept a callback function and two numbers that will be added together and sent to the callback.

<br>

```

    // create another callback function whose job is to output whatever it's 
    // passed back to display.  If nothing is passed back then output a default value.
    var myConsoleLog = function (output: string = 'Nothing was passed back to output') {
        console.log(output);
    }

    // create a function and pass in the callback method.
    function add(cb: (string) => void, a: number, b: number) {
        var c = a + b;
        cb('a + b = ' + c);
    }

    // call the new add function and pass in the callback function and two numbers.
    add(myConsoleLog, 2, 3);


```

<br>



##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 