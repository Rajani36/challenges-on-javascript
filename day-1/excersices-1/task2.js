//Define a callback function before you use it in forEach, map, filter or reduce.
let callback = 'A callback is a function which can be passed as parameter to other function. See the example below.'

/*example*/

const random = (n) => {
 return n + 2
}

// function that takes other function as a callback
function addition(random, n) {
 return random(n) + n
}

console.log(addition(random, 2))
