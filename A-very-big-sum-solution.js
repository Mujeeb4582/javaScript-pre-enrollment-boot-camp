function aVeryBigSum(ar){
    // first access the every element of array
    // then add every element of array 
    // return sum of the array
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr));