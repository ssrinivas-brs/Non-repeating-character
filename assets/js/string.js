function findFirstNonRepeating() {
    // Get the input string from the user
    const inputString = document.getElementById("inputString").value;

    // Find the first non-repeating character
    const result = getFirstNonRepeatingChar(inputString);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = result === null ? "No non-repeating character found." : `First non-repeating character: ${result}`;
}

function getFirstNonRepeatingChar(inputStr) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of inputStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of inputStr) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeating character is found
    return null;
}