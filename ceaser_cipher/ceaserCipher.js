const alphabets = "abcdefghijklmnopqrstuvwxyz";
// If we reach the end of the alphabets cycle back to the first alphabet
const cycleThreshold = alphabets.length;
const lowerCaseAlphabets = alphabets.split("");
const upperCaseAlphabets = alphabets.toUpperCase().split("");

export default function ceaserCipher(string, shift) {
    let cipher = "";
    for (const character of string) {
        // For lower-case character
        if (isLowerCase(character)) {
            cipher += getCipherCharacter(character, shift, lowerCaseAlphabets);
            continue;
        }

        // For upper-case character
        if (isUpperCase(character)) {
            cipher += getCipherCharacter(character, shift, upperCaseAlphabets);
            continue;
        }

        // For all other unknown characters
        cipher += character;
    }
    return cipher;
}

function isLowerCase(character) {
    return lowerCaseAlphabets.includes(character);
}

function isUpperCase(character) {
    return upperCaseAlphabets.includes(character);
}

function getCipherCharacter(character, shift, alphabetsArray) {
    // Get cyperIndex
    const cypherIndex =
        (alphabetsArray.indexOf(character) + shift) % cycleThreshold;

    // Return the cypherCharacter
    return alphabetsArray[cypherIndex];
}
