/**
 * Given an rotated array found the amount times it has been rotated
 * aka given a sorted array find the smallest value and return its indexed
 * 
 * 
 * 
 * what ever the smallest value index is the amount of times its been rotated
 * create a start and end
 *  start = 0;
 *  end = arr.length - 1
 * 
 * loop while start <= end
 *  create midIdx and midval
 *  check if midVal is less than or equal to end
 *      if it is less then make end = midIdx
 *  else if it is greater then 
 *      make start = midIdx + 1
 * else if it is equal to end
 * 
 * return end
 */
function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal < arr[end]){
            end = midIdx;
        } else {
            start = midIdx + 1;
        }
    }

    return end;
}

module.exports = findRotationCount