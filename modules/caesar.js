import { showError } from "./error.js";
import { clear } from "./clear.js";
import { input, result } from "./variables.js";

function convertCaeser(word) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(word)) {
    showError();
  } else {
    const wordToLow = word.toLowerCase();
    let newWord = "";
    for (let i = 0; i < wordToLow.length; i++) {
      if (!isNaN(wordToLow[i])) {
        newWord += wordToLow[i];
      } else {
        let convertLetterToNumber = wordToLow[i].charCodeAt() + 13;
        if (convertLetterToNumber > 122) convertLetterToNumber -= 26;
        if (word[i] != wordToLow[i]) convertLetterToNumber -= 32;

        newWord += String.fromCharCode(convertLetterToNumber);
      }
    }
    clear();
    result.textContent = newWord;
  }
}

export default convertCaeser;
