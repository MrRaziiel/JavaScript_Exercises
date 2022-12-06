var firstSide = 7;
var secondSide = 6;
var thirdsSide = 5;

var s = (firstSide + secondSide + thirdsSide)/2;
console.log(s);
var areaOfTraingle = Math.sqrt(s*((s-firstSide)*(s-secondSide)*(s-thirdsSide)));

console.log(areaOfTraingle);