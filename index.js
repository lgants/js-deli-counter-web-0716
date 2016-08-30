var katzDeli = [];

function takeANumber(katzDeliLine, person){
  return `Welcome, ${person}. You are number ${katzDeliLine.push(person)} in line.`;
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var str = "The line is currently:";
    katzDeliLine.forEach(function(element,index){
      str += (" " + (parseInt(index)+1) + ". " + element + ",");
    });
    return str.slice(0,-1);
  } else {
    return "The line is currently empty.";
  }
}
