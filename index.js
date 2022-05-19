// Code your solutions in this file
const newArr = []

function writeCards (name, event) {
  for (let i = 0; i < name.length; i++)
    newArr.push(`Thank you, ${name[ i ]}, for the wonderful ${event} gift!`)
  return newArr
}

function countDown () {
  let count = 11
  while (count > 0) {
    console.log(--count)
  }
  return count
}

