function reverseString(string) {
  const strArr = string.split('')
  let arr = strArr.reverse().join('')
  return arr
}
module.exports = reverseString