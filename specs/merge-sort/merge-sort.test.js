/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    result = result.concat(arr1.slice(i));
  } else {
    result = result.concat(arr2.slice(j));
  }

  return result;
};

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  }

  const halfLength = Math.ceil(nums.length / 2);
  return merge(
    mergeSort(nums.slice(0, halfLength)),
    mergeSort(nums.slice(halfLength))
  );
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
