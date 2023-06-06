function miniMaxSum(arr) {
  // Write your code here
//   let array = [];
  let maxSum = 0;
  let minSum = 0;

  arr.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    minSum = arr[0] + arr[1] + arr[2] + arr[3];
    maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  }

  console.log(minSum, maxSum);
}
