const emit = (a, b) => console.log(a + ', ' + b);


const yesIfEven = (x) => {
  return (x % 2) === 0
}

const countXs = (s) => {
  let n = 0
  for (let i = 0; i < s.length; i++)
    if (s[i] === 'x') {
      n++
    }
  return n
}

//WHAT EMIT FUCNTION I DON'T SEE AN EMIT FUNTION??
const timesTable = (n) => {
  for (let x = 0; x < n; x++)
    for (let y = 0; y < n; y++)
      emit(x, y, x * y)
}
//I THINK THIS WOULD BE CORRECT IF I HAD EMIT SO HOPEFULLY ITS GOOD :)

const containsX = (s) => {
  return s.indexOf('x') !== -1
}

const sumSquares = (n) => {
  let x = 0
  for (let i = 0; i < n; i++)
    x = x + (i ** 2)
  return x
}