function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  a.map((item, index) => {
    if (item > b[index]) {
      alicePoints += 1;
    } else if (item < b[index]) {
      bobPoints += 1;
    }
  });

  return [alicePoints, bobPoints];
}
