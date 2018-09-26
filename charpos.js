function characterPositions (str) {
  var result = {};
  var strArr = str.split(' ').join('').split('')

  for (var i = 0; i < strArr.length; i++) {
    result[strArr[i]] = result[strArr[i]] || [];
  }

  var keys = Object.keys(result)

  for (var j = 0; j < strArr.length; j++) {
    for (var k = 0; k < keys.length; k++) {
      if (strArr[j] === keys[k]) {
        result[strArr[j]].push(j)
      }
    }
  }

  return result
}

console.log(characterPositions("hello there"))