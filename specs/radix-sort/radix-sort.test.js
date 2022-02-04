/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const makeBuckets = () => {
  const buckets = new Array(10).fill().map(() => []);

  const putInABucket = (num, indexFromEnd) => {
    const numString = num.toString();
    if (indexFromEnd > numString.length) {
      buckets[0].push(num);
    } else {
      const digit = Number(numString.slice(-indexFromEnd)[0]);
      buckets[digit].push(num);
    }
  };

  const dequeueBuckets = () => {
    return buckets.flat();
  };

  return {
    putInABucket,
    dequeueBuckets,
  };
};

function radixSort(array) {
  // const startTimestamp = Date.now();

  // find max number length
  let maxLength = 0;
  for (let num of array) {
    const currLength = num.toString().length;
    maxLength = currLength > maxLength ? currLength : maxLength;
  }

  // sort
  let result = array;
  for (let i = 1; i <= maxLength; i++) {
    const { putInABucket, dequeueBuckets } = makeBuckets(maxLength);
    for (let numString of result) {
      putInABucket(numString, i);
    }
    result = dequeueBuckets();
  }

  // console.log(Date.now() - startTimestamp);
  return result;
}

// const nums = new Array(1000000)
//   .fill()
//   .map(() => Math.floor(Math.random() * 500000));
// radixSort(nums);

describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);

    expect(ans).toEqual(nums.sort((a, b) => a - b));
  });
});
