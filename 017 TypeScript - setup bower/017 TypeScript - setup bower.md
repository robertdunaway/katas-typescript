---
title: 017 TypeScript - setup bower

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

# 017 TypeScript - setup bower

## Duration
5 minutes

## Brief
Setting up Bower to provide 3rd party libraries and configuring Gulp to move the required files to wwwroot.

### For more information 
BING/GOOGLE: “TypeScript Visual Studio Bower”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/017%20TypeScript%20-%20setup%20bower/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/017%20TypeScript%20-%20setup%20bower/after


# Kata

Bring up a command line in the root of the project and run the following commands.

<br>

Globally install Bower

<br>

	`npm install bower -g`

<br>

Create the initial Bower file

<br>

	`bower init`

<br>

Install two bower packages to match the two TSD files installed earlier.

<br>
```

bower install jquery --save
bower install angular --save


```
<br>

At this point bower is installed and a new `bower_components` directory is create.  The `bower_components` folder should not be checked in with your source code.  Be sure to exclude it where ever you can in the `*.json` files.

<br>

The last thing you might want to do is configure gulp to move files from bower into the `wwwroot` folder for use by your application.

<br>

Let’s add some of the more common libraries to our project.  First we must add them to our `bower.json` and then we can move the required files to `wwwroot`.

<br>

Getting the libraries installed.

<br>

```

	bower install --save bootstrap
	bower install --save normalize.css
	bower install --save fontawesome
	bower install --save jQuery
	bower install –-save angular
	bower install –-save angular-ui-router
	bower install –-save angular-bootstrap
	bower install –-save lodash


```

<br>

Now we can add a task for moving only the required files to the `wwwroot` folder.


##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 