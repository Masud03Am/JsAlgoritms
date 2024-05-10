var arr = [1, 5, 6, 8];
function arrSum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(arrSum(arr));