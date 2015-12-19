
// Let's get started!
console.log("Let's get started!");

var result: string = 'dog';

switch (result) {
    case 'cat':
        {
            console.log('a cat was chosen');
        }
    case 'dog':
        {
            console.log('a dog was chosen');
        }
}

switch (result) {
    case 'cat': {
        console.log('a cat was chosen');
    }
    case 'bird': {
        console.log('a bird was chosen');
    }
    default: {
        console.log('the default was used.');
    }
}

