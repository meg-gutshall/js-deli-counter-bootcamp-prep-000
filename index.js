var katzDeli = [];

function takeANumber(katzDeliLine, otherDeli) {
  while (otherDeli.length > 0) {
    katzDeliLine.push(otherDeli);
  }
}