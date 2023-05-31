function aVeryBigSum(ar) {
  // Write your code here
  var a = 0;
  ar.map((item, index) => {
    a += item;
  });
  return a;
}
