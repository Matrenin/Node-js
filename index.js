import colors from 'colors'
let [arg1, arg2] = process.argv.slice(2)
arg1 = +arg1
arg2 = +arg2
let numbers = []

function getSimpleNumbers(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    for (let j = 2; j <= i; j++) {
      if ((i % j === 0) && (j !== i)) {
        break
      } else {
        numbers.push(i)
        break
      }
    }
  }
}

if (arg1 > arg2) {
  getSimpleNumbers(arg2, arg1)
} else {
  getSimpleNumbers(arg1, arg2)
}

numbers.map((n, index) => {
  if (!(index % 3)) {
    console.log(colors.green(n))
  }
  if (!((index + 1) % 3)) {
    console.log(colors.red(n))
  }
  if (!((index + 2) % 3)) {
    console.log(colors.yellow(n))
  }
})


