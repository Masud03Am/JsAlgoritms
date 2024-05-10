function numFactors(num){
    let factors = [];
    for(let i = 2; i <= num; i++){
        while(num % i === 0) {
            factors[factors.length] = i;
            num = num / i;
        }
    }
    return factors
}

function NodByNumFactors(a, b) {
    const factorsA = numFactors(a);
    const factorsB = numFactors(b);
    let nod = 1;
    let i = 0;
    let j = 0;
    while(i < factorsA.length && j < factorsB.length){
        if(factorsA[i] === factorsB[j]){
            nod = nod * factorsA[i];
            i++;
            j++;
        } else if(factorsA[i] < factorsB[j]){
            i++;
        } else{
            j++;
        }
    }
    return nod;
}

console.log(NodByNumFactors(24, 66));