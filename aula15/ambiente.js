let num = [5, 8, 2, 9, 3]
num.sort()
num.push(10)
console.log(num)

for (let pos in num) {
    console.log(num[pos])
}
console.log('---------------------------------')
console.log(num.indexOf(10))