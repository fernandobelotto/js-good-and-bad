console.log("" == "0") // false
console.log(0 == '') // true
console.log(0 == '0') // true

console.log(false == 'false') // false
console.log(false == '0') // true

console.log(false == undefined) // false
console.log(false == null) // false
console.log(null == undefined) // true

console.log(1 == [1]) // true
console.log( true == [1]) // true
console.log(true == [true]) // false