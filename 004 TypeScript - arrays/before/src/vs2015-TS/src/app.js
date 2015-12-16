// Let's get started!
console.log("Let's get started!");
//Create an Enum using “Red”, “Green”, and “Blue”.  This is a commonly used to demonstrate Enums.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//Create a variable and set it equal to the “Green” enum value.
var myColor = Color.Green;
console.log('myColor = ' + myColor);
//Create another variable and set it equal to the enum in 0(zero) position.By default enums are zero based.
//var myColor2: string = Color[0];
//console.log('myColor2 = ' + myColor2);
//Create another “color” type enum but this time name the enum start at 5.
//enum Color2 { Red = 5, Green, Blue };
//Create a variable and set it to one of the new enum values.
//Write to the console the enum integer associated with one of the enum values.
