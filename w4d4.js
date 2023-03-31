/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//                   V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(arr, num, low=0, high=arr.length-1){
    if(low<=high){
        var mid=Math.floor((low+high)/2)
        if (arr[mid]==num){
            return true
        }
        else if (num<arr[mid]){
            return binarySearch(arr,num,low,mid-1)
        }
        else if (num>arr[mid]){
            return binarySearch(arr,num,mid+1,high)
        }
    }
    return false
}

console.log(binarySearch(nums1, searchNum1 ))
console.log(binarySearch(nums2, searchNum2 ))
console.log(binarySearch(nums3, searchNum3 ))

// don't be afraid to add parameters!

// base case(s)
// logic
// recursive call(s) / return(s)

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return