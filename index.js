var katzDeli = [];

var katzDeliLine = otherDeli.length;

function takeANumber(katzDeliLine, otherDeli) {
  for (let i = katzDeliLine.length; i > 0; --i) {
    katzDeli.push("Welcome, " + otherDeli[i] + ". You are number " + katzDeliLine[i] + " in line.");
  }
  return katzDeli;
}