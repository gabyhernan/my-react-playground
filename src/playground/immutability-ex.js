//When dealing with arrays you should not use methods that will mutate the given array such as push, shift, unshift,reverse,sort and other array methods. Instead, you should use their immutable equivalents.

//Instead of push use the spread operator

const animals = ['Mouse', 'Elephant']
const animalsUpgrade = [...animals, 'Crocodile']
console.log(animals) // ["Mouse", "Elephant"]
console.log(animalsUpgrade) // ["Mouse", "Elephant", "Crocodile"]
console.log(animals === animalsUpgrade) // false


// Benefits of immutability approach when dealing with arrays,
// objects, functions aka non primitive types
// 1. your state will become more predictable,
// 2.  application will be more performant
//  your code more testable and debuggable 

