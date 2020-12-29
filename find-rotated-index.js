/**
 * Write a function the when given a rotated array will return the index of the target
 * 
 * findRotatedIndex([3,4,1,2],4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
    findRotatedIndex([6, 7, 8, 9, 10, 11, 1, 2, 3, 4,5], 12) // -1

    create two variables start end
    check if start is < end if so pass them to 
    the binary search ()
    else find the pivot

    pivot: 
        while start <= end:
            find midpoint start+end/2
            get midVal
            check if midVal is less than end
                if less than end make end = midIdx -1
                
            else if midVal is greater then end:
                make start = midIdx + 1;
            
            else
                return midIdx

 */
function findRotatedIndex(arr, target) {
    const pivot = findPivot(arr);

    const first = binarySearch(arr, 0, pivot - 1, target);

    const second = binarySearch(arr, pivot, arr.length - 1, target);

    if(arr[first] === target) return first;
    else if(arr[second] === target) return second
    
    return -1;
}

function findPivot(arr = [3,4,1,2], start = 0, end = arr.length-1){
    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal < arr[end]){
            end = midIdx ;
        } else if(midVal > arr[end]){
            start = midIdx + 1;
        } else {
            return midIdx
        }
    }
}

function binarySearch(arr, start, end, target){
    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal < target){
            start = midIdx + 1;
        } else if (midVal > target){
            end = midIdx - 1;
        } else {
            return midIdx;
        }
    }

    return -1;
}

module.exports = findRotatedIndex