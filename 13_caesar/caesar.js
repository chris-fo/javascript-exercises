const caesar = function(string, shiftCipher) {
  let punctuation = [' ', ',', '!', '.', '?'];
  let letters = string.split('');
  let shiftedLetters = [];
  for (index in letters) {
    if (!punctuation.includes(letters[index])) {
      let unicodeLetter = string.charCodeAt(index);
      // shifting more than 26 chars does not make sense, reduce shift
      if (shiftCipher > 26) shiftCipher %= 26;
      if (64 < unicodeLetter && unicodeLetter < 91) {
        // capital letter, wrap alphabet if necessary
        if ((unicodeLetter + shiftCipher) > 90) unicodeLetter -= 26;
        else if ((unicodeLetter + shiftCipher) < 65) unicodeLetter += 26;
      } else if (96 < unicodeLetter && unicodeLetter < 123) {
        // lowercase letters, wrap alphabet if necessary
        if ((unicodeLetter + shiftCipher) > 122) unicodeLetter -= 26;
        else if ((unicodeLetter + shiftCipher) < 97) unicodeLetter += 26;
      }
      shiftedLetters.push(String.fromCharCode(unicodeLetter + shiftCipher));
    } else {
      shiftedLetters.push(letters[index]);
    }
  }
  return shiftedLetters.join('');
};

// Do not edit below this line
module.exports = caesar;
