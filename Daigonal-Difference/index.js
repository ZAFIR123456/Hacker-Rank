function diagonalDifference(arr) {
  // Write your code here
  var a = 0;
  var b = 0;
  var c = 0;
  arr.map((item, index) => {
    a += item[index];
    b = item.reverse();
    b = b[index];
    c += b;
  });
  return Math.abs(a - c);
}
