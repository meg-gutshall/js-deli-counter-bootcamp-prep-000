var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, " + katzDeli + ". You are number " +  + " in line.");
  return katzDeliLine;
}