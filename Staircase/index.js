function staircase(n) {
  // Write your code here
  for (var i = 1; i <= n; i++) {
    var hashes = "#".repeat(i);
    let spaceCount = n - i;
    let spaces = "";
    if (i != n) {
      spaces = " ".repeat(spaceCount);
      // console.log("qwert")
    }

    console.log(spaces + hashes);
  }
}
