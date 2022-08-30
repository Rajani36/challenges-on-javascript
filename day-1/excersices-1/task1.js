1.//Explain the difference between forEach, map, filter, and reduce

let forEach = " Iterate an array elements. We use _forEach_ only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional."

/*example*/

let total= 0;
 const num = [1, 2, 3, 4, 5];
 num.forEach(num => console.log(num))
 console.log(total)


 let map = "Iterate an array elements and modify the array elements. It takes a callback function with elements,  index , array parameter and return a new array."

 /*example*/

 const nums = [1, 2, 3, 4, 5]
const square = nums.map((n) => nums * nums)
console.log(square)



let Filter =  'Filter out items which full fill filtering conditions and return a new array.'

/*example*/

const scores = [
    { name: 'Arha', marks: 95 },
     { name: 'ARPITH', marks: 98 },
    { name: 'Mathias',marks : 80 },
    { name: 'Elias', marks: 50 }
    
  
  ]
  const marksGreatersixty = scores.filter((marks) => marks.marks > 60)
  console.log(marksGreatersixty)




  let reduce = "Reduce takes a callback function.The call back function takes accumulator,  current, and optional initial value as a parameter and returns a single value.It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array `first value`. If our array is an _empty array_, then `Javascript` will throw an error."
   

   /*example*/

     const number = [-1, -2, -3, 4, 5]
     const sum = number.reduce((acc, cur) => acc + cur, 0)
     console.log(sum)

    