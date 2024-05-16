function isAnagram(string1, string2) {
    if(string1.length !== string2.length){
        return false;
    }
    const bukvsCounts1 = {};
    const bukvsCounts2 = {};
    for(let i = 0; i < string1.length; i++){
        let bukva1 = string1[i];
        let bukva2 = string2[i];
        bukvsCounts1[bukva1] = (bukvsCounts1[bukva1] || 0) + 1;
        bukvsCounts2[bukva2] = (bukvsCounts2[bukva2] || 0) + 1;
    }
    const allBukvs = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < allBukvs.length; i++){
        let bukva = allBukvs[i];
        if(bukvsCounts1[bukva] !== bukvsCounts2[bukva]){
            return false;
        }
    }
    return true;
}
const string1 = "heart";
const string2 = "earth";
if(isAnagram(string1, string2)){
    console.log('являются анаграммой');
}
else{
    console.log('не являются анаграммой');
}