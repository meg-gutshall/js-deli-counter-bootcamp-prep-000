var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, " + otherDeli + ". You are number " + otherDeli.length + " in line.");
  return katzDeliLine;
}