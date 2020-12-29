/**
 * given a sorted array and a target, write a function that finds the number of occurrences of the target
 * 
 *  sortedFrequency([1,1,2,2,2,2,3],2) // 4
    sortedFrequency([1,1,2,2,2,2,3],3) // 1
    sortedFrequency([1,1,2,2,2,2,3],1) // 2
    sortedFrequency([1,1,2,2,2,2,3, 4],4) // -1

    create two pointers 
     start = 0 & end = arr.length - 1
     find the mididx = start + end / 2
    
    first = findTheFirstOccurrence of the target
            create start and end
            create results = - 1
            pass in the arr and loop through it until start > end
            create midIdx and midVal
            check if midVal is equal to target
                if midVal === target; make end = midIdx - 1;
                 store midIdx in results
                else check if midVal is less than the target
                    if midVal < target; start = midIdx + 1;
                else check if midVal is greater than target
                    if midVal > target; end = midIdx - 1;
                
            loop ends return results  
        
    last = findTheLastOccurrence of target

    if first ||  last is -1 return -1

    once you have the indexes of the first and last
    subtract first from last and add one



    return the subtracted value
 */
function sortedFrequency(arr, target) {

    let first = firstOccurrence(arr, target);
    let last = lastOccurrence(arr, target);

    if(first === -1 || last === -1 ) return -1;

    return last - first + 1;

}

function firstOccurrence(arr, target){
    let start = 0;
    let end = arr.length -1;
    let results = -1
    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal === target){
            results = midIdx;
            end = midIdx - 1;
        } else if (midVal < target){
            start = midIdx + 1;
        } else if (midVal > target){
            end = midIdx - 1;
        }
    }

    return results;
}

function lastOccurrence(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let results = -1;

    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = arr[midIdx];

        if(midVal === target){
            results = midIdx;
            start = midIdx + 1;
        } else if(midVal > target){
            end = midIdx - 1
        } else if (midVal < target){
            start = midIdx + 1;
        }
    }

    return results;
}

module.exports = sortedFrequency