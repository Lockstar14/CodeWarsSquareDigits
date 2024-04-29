function squareDigits(num) {
let numStr = String(num)
let result = " "
for (digit of numStr){
    let square = digit  ** 2
    result += Number(square)
    
}
return result
}
console.log(squareDigits(3212));
