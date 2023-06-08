function timeConversion(s) {
  // Write your code here
  let hours = "";
  let minutes = "";
  let sec = "";
  let militaryTime = "";

  const timeZone = s.slice(-2);
  let time = s.slice(0, -2);
  let date = time.split(":");
  hours = date[0];
  minutes = date[1];
  sec = date[2];

  if (hours === "12") {
    militaryTime = timeZone === "PM" ? "12" : "00";
  } else {
    militaryTime = timeZone === "PM" ? String(Number(hours) + 12) : hours;
  }

  return `${militaryTime}:${minutes}:${sec}`;
  // console.log(`${militaryTime}:${minutes}:${sec}`)
}
