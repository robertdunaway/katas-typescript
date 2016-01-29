---
title: 016 TypeScript setup tsd

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

# 016 TypeScript setup tsd

## Duration
10 minutes

## Brief
Setting up TSD (TypeScript Definitions)

### For more information 
BING/GOOGLE: “TypeScript tsd”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/016%20TypeScript%20setup%20tsd/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/016%20TypeScript%20setup%20tsd/after


# Kata

Install TSD, a kind of package manager for TypeScript Definitions.

<br>

```
npm install tsd -g

```

<br>

Now TSD is installed and you can run commands with it.

<br>


```

	$ tsd
	
	$ tsd -h
	
	$ tsd --help
	
	$ tsd –version


```
<br>

Create TSD files

<br>

```
	npm init
```
<br>

> NOTE: This creates the tsd.json and typings/tsd.d.ts files.

<br>

Get TSD definitions for Angularjs and its dependencies.

<br>

```

tsd install angular --resolve --overwrite --save


```

<br>

To reinstall TSD definitions

<br>

```

tsd reinstall --save –overwrite


```

<br>

To update with the latest definitions

<br>

```

tsd update --save –overwrite


```

<br>

Open any `*.ts` file and type “angular” and intellisense is activated.


<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/016%20TypeScript%20-%20setup%20tsd/1.png" alt="Smiley face"> 

<br>

Let’s take this to the next level.  At this point we have type definitions and that is great but now we need to manually update the definitions when changes are published and we are forced to check the Typings folder into source control.  The problem with this is type script definitions are now source code.

<br>

Gulp can handle this for us.  We will configure a gulp task to retrieve the latest type definitions and reinstall them when the project loads.

<br>

Create a new file at the root of the project named “`gulp_tsd.json`”.  Add the following configuration to the new file.

<br>

```typescript

    {
        "command": "reinstall", 
        "latest": true,         
        "config": "./tsd.json", 
        "opts": {
        }
    }

```

Add a task to the gulp file.  First add a reference to the gulp-tsd plugin.

<br>
```typescript
    , tsd = require('gulp-tsd');
```
<br>

Then add this task.

<br>

```typescript

gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});


```

<br>

In the Task Runner Explorer find the tsd task. Right click on the tsd task and select “Bindings” then “Project Open”.  This will cause the tsd task to reinstall the type script definitions whenever a project is opened.




##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 