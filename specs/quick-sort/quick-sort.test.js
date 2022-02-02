/*

  Quick Sort!

  Name your function quickSort.

  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

/** Destructive **/
function quickSort(nums, start, pivot) {
  start = start || 0;
  pivot = pivot || nums.length - 1;

  if (start >= pivot) {
    return;
  }

  let leftCount = 0;
  let rightCount = 0;
  let i = start;
  while (i < pivot) {
    if (nums[i] > nums[pivot]) {
      nums.splice(pivot, 0, nums.splice(i, 1)[0]);
      rightCount++;
      pivot--;
    } else {
      leftCount++;
      i++;
    }
  }

  if (leftCount > 1) {
    quickSort(nums, start, start + leftCount - 1);
  }
  if (rightCount > 1) {
    quickSort(nums, leftCount + 1, leftCount + 1 + rightCount - 1);
  }

  return nums;
}

/** Non-destructive **/
// function quickSort(nums) {
//   // code goes here
//   if (nums.length <= 1) {
//     return nums;
//   }

//   const lastIndex = nums.length - 1;
//   const left = [];
//   const right = [];
//   for (let i = 0; i < lastIndex; i++) {
//     if (nums[i] <= nums[lastIndex]) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }

//   return [].concat(quickSort(left), [nums[lastIndex]], quickSort(right));
// }

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
