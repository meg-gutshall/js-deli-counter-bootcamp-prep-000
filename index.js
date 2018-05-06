var katzDeli = [];

function takeANumber(katzDeliLine, otherDeli) {
  for (let i = otherDeli.length; i > 0; --i) {
    katzDeli.push("Welcome, " + otherDeli[i] + ". You are number " + katzDeliLine[i] + " in line.");
  }
  return katzDeli;
}