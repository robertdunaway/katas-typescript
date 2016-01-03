---
title: 003 TypeScript – enums and more VS Config

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

# 003 TypeScript – enums and more VS Config

## Duration
10 minutes

## Brief
Using enums and setting up Visual Studio to play nicely with TypeScript.

### For more information 
BING/GOOGLE: “TypeScript enums”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/003%20TypeScript%20-%20enums%20and%20more%20VS%20Config/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/003%20TypeScript%20-%20enums%20and%20more%20VS%20Config/after


# Kata

Create an Enum using “Red”, “Green”, and “Blue”.  This is a commonly used to demonstrate Enums.

<br/>

```

enum Color { Red, Green, Blue };


```

<br/>

> TIP: Immediately you will notice red lines under your code with a message that indicates these are identifiers are duplicated.  This is because the gulp tasks created a copy of the `ts` file in the `wwwroot` directory.   To resolve this we need to create a new file in the root of our project named “`tsconfig.json`” and add the following content to it.  

```

{
  "exclude": [
    "bower_components",
    "node_modules",
    "wwwroot"
  ]
}


```

<br/>

Voila!  Problem solved!  
<br/>

Well, the problem is almost solved.  Now when you build the TS file is used to properly generate a minified JS and map file.  Everything should work except as you run your project you might notice that Visual Studio does a little file manipulation of its own which completely breaks everything.
<br/>

To stop Visual Studio from interfering go to the `Project --> Properties` and select the Build tab. Here you can disable Visual Studio’s compile for TypeScript on build.








##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 