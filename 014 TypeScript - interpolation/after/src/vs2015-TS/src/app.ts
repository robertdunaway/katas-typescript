
// Let's get started!
console.log("Let's get started!");

var firstName: string = 'Bob';
var career: string = 'programmer';

var newString: string = firstName + ' is a ' + career + '.'
console.log('classic string concatination');
console.log(newString);

var newInterpString: string = `${firstName} is a ${career}.`;
console.log('string interpolation');
console.log(newInterpString);

