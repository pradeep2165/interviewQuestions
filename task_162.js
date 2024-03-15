//split the string with comman and semicolon

const list = "apple,samsung;vivo";
const devices = list.split(",");
// cosnt devices = list.split(/[,;]/)
console.log(devices);
