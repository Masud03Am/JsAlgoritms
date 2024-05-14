function reverseNumber(num) {
    let rev = 0;
    while (num !== 0){
        rev = (rev * 10) + (num % 10);
        num = (num - (num % 10)) / 10;
    }
    return rev;
}

var num = 12345;
console.log(reverseNumber(num));