var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeliLine.shift();
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, " + otherDeli + ". You are number " + katzDeli.length + " in line.");
  return katzDeliLine;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeli.slice(1) + ".";
  }
}
