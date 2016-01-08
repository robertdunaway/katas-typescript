
(function () {

    // Let's get started!
    console.log("Let's get started!");

    // create a function to be used as a callback.  This is our callback function.
    var myCB = function () {
        console.log('The callback just ran...');
    };

    // create a function and pass in the callback method.
    function myFunction(cb: () => void) {
        cb();
    }

    myFunction(myCB); // calling the new function and pass in the callback.


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

    // Run the application and press F12 on the browser to see the results in the console.

})();