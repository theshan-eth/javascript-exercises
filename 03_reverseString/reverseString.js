const reverseString = function(word) {
    index = word.length;
    const reversedString = Array.from(word);
    reversedString.reverse();
    return reversedString.join("")
}

// Do not edit below this line
module.exports = reverseString;
