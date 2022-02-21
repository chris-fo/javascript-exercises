const palindromes = function (palindrome = '') {
  let punctuationOrSpaces = ['!', '.', ',', '?', ' '];
  // strip all punctuation and spaces and make lowercase
  palindrome = palindrome.split('').filter(char => !punctuationOrSpaces.includes(char)).join('').toLowerCase();
  return (palindrome === palindrome.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
