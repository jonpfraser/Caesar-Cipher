import CaesarCipher from './CaesarCipher.js'

const string = 'Alice has 2 apples and bob has 5 apples. Alice and bob both give Carl 1 apple each, how many apples does Carl have?';
const shiftVal = 13;
const cipher = new CaesarCipher('alphaNumeric');
const cipherText = cipher.encode(string, shiftVal);
const plainText = cipher.decode(cipherText, shiftVal);

console.log(cipherText);
console.log(plainText);