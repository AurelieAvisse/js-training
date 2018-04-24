'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(word) {
    let words = word.toLowerCase();
    let arr = words.split(' ');
    let temps = "";
    for(let i = 0; i < arr.length; i++) {
        arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
        temps = arr.join(' ');
    }
    return temps
}

//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(jadenCase("bienvenue a la loupe"), "Bienvenue A La Loupe")

// End of tests */
