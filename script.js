//Ask user with prompt
let HoursStr = prompt('How many hours did you work?','')
//Str to number
let Hours = Number(HoursStr)
//Seconds counter
let secInHours = Hours*3600;
//Alert result
alert(`Thats how many seconds you worked:${secInHours}`)