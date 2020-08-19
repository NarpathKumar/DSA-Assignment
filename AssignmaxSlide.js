function maxInSlidingWindow(arr, n){
    let sum = ""
    let newArr = arr;
    while(newArr.length >= n){
        let max = Number.NEGATIVE_INFINITY;
        for(let i=0; i<n; i++){
            if(arr[i] > max) max = arr[i];
        }
        sum+=" " + max;
        newArr.splice(0,1);
    }

    return sum
}
// console.log(maxInSlidingWindow([1,2,3,4,5,6], 3))