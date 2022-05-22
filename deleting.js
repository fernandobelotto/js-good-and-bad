let myArray = ['a', 'b', 'c', 'd']

delete myArray[1]

// now the array is undefined on position 1

console.log('myArray', myArray) // ['a', undefined, 'c', 'd']
console.log('myArray[1]', myArray[1]) // undefined

// is better to use splice
myArray.splice(1,1)

console.log('myArray', myArray)