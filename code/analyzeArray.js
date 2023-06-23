function analyzeArray(arr) {
  let sortedArr = arr.sort((a,b) => a - b)
  let sum = 0
  for(let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i]
  }
  let average = sum/sortedArr.length
  let min = sortedArr[0]
  let max = sortedArr[sortedArr.length - 1]

  return {
    average,
    min,
    max,
    length: sortedArr.length
  }

}

module.exports = analyzeArray