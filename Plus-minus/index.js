function plusMinus(arr) {
  let pNum = 0;
  let nNum = 0;
  let zero = 0;
  // const length = arr.length;

  arr.map((item) => {
    if (item > 0) {
      pNum++;
    } else if (item < 0) {
      nNum++;
    } else {
      zero++;
    }
  });

  const pRatio = pNum / arr.length;
  const nRatio = nNum / arr.length;
  const zeroRatio = zero / arr.length;

  console.log(pRatio.toFixed(6));
  console.log(nRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}
