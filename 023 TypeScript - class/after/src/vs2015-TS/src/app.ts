(function() {
    
    // Let's get started!
    console.log("Let's get started!");

    // Create a very basic class with only 3 properties.
    // New up an object with your new class as the template and update the properties.
    // Output your new class to the console.

    class myBasicClass {
        property1: number;
        property2: string;
        property3: string;
    }

    var x = new myBasicClass();
    x.property1 = 1;
    x.property2 = 'hi';
    x.property3 = 'number one';

    console.log(x);

    // Create a new "math" class with a constructor that accepts 2 numbers for various task.
    // Add these two numbers and output the results to the screen.
    // Add the add method to add up the two numbers and console.log the answer.
    // new up the new class.
    // Explicitly call the "add" function.

    class Math {
        constructor(a: number, b: number) {
            console.log(`constructor logic: ${(a + b)}`);
        }
        add(a: number, b: number) {
            console.log(`add function: ${(a + b)}`);
        }
    }

    var y: Math = new Math(5, 5);
    y.add(10, 5);


    // Create anothing class "Person" with FirstName, LastName, Email, and
    // a fullName() that returns the first and last names.  Output the result.
    class Person {
        FirstName: string;
        LastName: string;
        Email: string;
        fullName() { return `${this.FirstName}, ${this.LastName}`}
    }

    var z: Person = new Person();
    z.FirstName = 'Robert';
    z.LastName = 'Dunaway';
    
    var fullName = z.fullName();

    console.log(`full name is: ${fullName}`);
    
})();