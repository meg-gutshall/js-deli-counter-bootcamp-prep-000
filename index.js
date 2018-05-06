var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, ${katzDeli}")
  return katzDeliLine;
}