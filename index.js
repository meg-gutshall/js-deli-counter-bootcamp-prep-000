var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeliLine.shift();
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, " + otherDeli + ". You are number " + katzDeli.length + " in line.");
  return katzDeliLine;
}