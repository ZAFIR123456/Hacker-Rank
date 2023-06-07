function birthdayCakeCandles(candles) {
  // Write your code here
  let largestCandles = 0;
  let candlesCount = 0;

  largestCandles = Math.max(...candles);

  candles.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < candles.length; i++) {
    // largestCandles = candles[i];
    // candlesCount = 2;
    if (candles[i] == largestCandles) {
      candlesCount++;
    }
  }

  return candlesCount;
}
