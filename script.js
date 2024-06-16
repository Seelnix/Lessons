function removeCharacters(str, charsToRemove) {
  let result = '';
  for (let char of str) {
    if (!charsToRemove.includes(char)) {
      result += char;
    }
  }
  return result;
}
let originalString = "hello world";
let charactersToRemove = ['l', 'd'];
let newString = removeCharacters(originalString, charactersToRemove);
console.log(newString); 
