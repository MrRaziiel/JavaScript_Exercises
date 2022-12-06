var today = new Date();
var day = today.getDay();
var listDays = ["Segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var partOfDay = (hour >= 12)? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;

console.log("Today is:"+ listDays[day-1]);
console.log((hour + " " + partOfDay + " : " + minutes + " : " + seconds));