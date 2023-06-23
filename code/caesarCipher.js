function caesarCipher(string, shiftFactor) {
  if(shiftFactor > 26 || shiftFactor < 0) return 'shift value is invalid'

  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const strArr = string.split('')
  
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] !== ' ' && strArr[i] !== '!' && strArr[i] !== '.' && strArr[i] !== ',') {
      if(strArr[i] === strArr[i].toUpperCase()) {
        strArr[i] = alphabetArray[(alphabetArray.indexOf(strArr[i].toLowerCase()) + shiftFactor) % alphabetArray.length].toUpperCase()
      }
      else strArr[i] = alphabetArray[(alphabetArray.indexOf(strArr[i]) + shiftFactor) % alphabetArray.length]
    }
  }
  return strArr.join('')
}

module.exports = caesarCipher