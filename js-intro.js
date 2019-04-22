// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
mantra[0]
// 2. Write the code that determines if there is a 'x' in mantra.
mantra.includes("x")
//Returns boolean false - "Be the dev" does not include "x"
// 3. Write the code that determines if there is a 'v' in mantra.
mantra.includes("v")
//Returns boolean true - "Be the dev" does include "v"
// Stretch: Write the code that returns the position of 'v' in mantra.
mantra.indexOf("v")

// Consider the following statement:

var codingIsEasy = "no"
var imBored = "no"


if ((codingIsEasy && imBored) === "no") {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
//Answer above
// Consider the following statement:

var imLost = "no"
var imFrustrated = "not currently"

if (imLost === "yes" || imFrustrated === "yes") {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//Answer above
// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
// for (i=0; i<mantra.length; i++){
//   console.log(mantra[i])
// }
// // Stretch: Using a while loop.
// let i=0
// while (i<mantra.length){
//   console.log(mantra[i])
//   i++
// }
// // Super Stretch: Using forEach().
// mantra.split("").forEach(func = letter => {
//   console.log(letter)
// })
// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
// const noVowels = str => {
//   let arr = []
//   str.split("").forEach(deVowel = letter => {
//     if (!/[aeiou]/i.test(letter)) {
//       arr.push(letter)
//     }
//   })
//   return arr.join("")
// }
// Stretch: Update your function to throw an exception if the argument is not a string.
// const noVowels = str => {
//   if (typeof str === "string"){
//     let arr = []
//     str.split("").forEach(deVowel = letter => {
//       if (!/[aeiou]/i.test(letter)) {
//         arr.push(letter)
//       }
//     })
//     return arr.join("")
//   } else {
//     throw "Error: Please Enter a String"
//   }
// }
// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
const noVowels = str => {
  if (typeof str !== "string"){
    throw "TypeError"
  } else {
    let arr = []
    str.split("").forEach(deVowel = letter => {
      if (!/[aeiou]/i.test(letter)) {
        arr.push(letter)
      }
    })
    return arr.join("")
  }
}
console.log(noVowels(123))
// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
// const toonCats = arr => {
//   return arr.filter(cat => {
//     if (cat.animal === 'cat') {
//       return cat.name
//     }
//   })
// }
