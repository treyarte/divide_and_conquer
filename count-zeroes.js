/**
 * Write function that takes in an array of one and zeros
 * return the number of 0s in the array in log n time
 * the array is sorted in asc order
 * 
 * [111] -> 0
 * [11000] -> 3
 * [0] -> 1
 * [] -> 0
 * [0000] -> 4
 * 
 * countZeroes([1,0,0,0,0]) // 4
 * countZeroes([1,1,0,0,0]) // 3
 * 
 * 
 * check if the first element is a zero
 *  if so return the length of the array
 * check if the length is less than one
 *  return 0
 * 
 * create a zero counter = 0
 * creat start, and end pointers
    start = 0, end = array.length - 1;

    loop through the array until start >= end

    create a midpoint = math.floor(start + end / 2)
    create a middle value

    if midVal > 0
     move start to midInx + 1
    else if midVal < 1
        move end to midIdx + 1
    
    return arr.length - start

 
 */
function countZeroes(arr) {
    if(arr[0] === 0) return arr.length;
    if(arr.length <= 0) return 0;

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal > 0){
            start = midIdx + 1;
        } else if(midVal < 1){
            end = midIdx - 1;
        }
    }
  
    return arr.length - start;
}   

module.exports = countZeroes