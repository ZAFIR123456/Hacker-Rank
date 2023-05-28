function simpleArraySum(ar) {
  // Write your code here
  var sum = 0;
  ar.map((item, index) => {
    sum += item;
  });
  return sum;
}
