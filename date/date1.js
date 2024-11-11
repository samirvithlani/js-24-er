var date = new Date(); //creation of date object
//var date = new Date(2007, 6, 7, 18, 0, 0, 0); //creation of date object with parameters
//var date = new Date("2007-07-07"); //creation of date object with string
//var date = new Date("2007-07-07T07:07:07"); //creation of date object with string
console.log(date); //printing the date object

//milliseconds since 1 January 1970 00:00:00 UTC
console.log(date.getTime()); //getting the time in milliseconds
console.log("year",date.getFullYear()); //getting the year
console.log("month",date.getMonth()); //getting the month
console.log("date",date.getDate()); //getting the date
console.log("day",date.getDay()); //getting the day
console.log("hours",date.getHours()); //getting the hours
console.log("minutes",date.getMinutes()); //getting the minutes
console.log("seconds",date.getSeconds()); //getting the seconds
console.log("milliseconds",date.getMilliseconds()); //getting the milliseconds
//console.log("timezone offset",date.getTimezoneOffset()); //getting the timezone offset
console.log("UTC date",date.getUTCDate()); //getting the UTC date
console.log("UTC day",date.getUTCDay()); //getting the UTC day
console.log("UTC hours",date.getUTCHours()); //getting the UTC hours
console.log("UTC minutes",date.getUTCMinutes()); //getting the UTC minutes
console.log("UTC month",date.getUTCMonth()); //getting the UTC month
console.log("UTC seconds",date.getUTCSeconds()); //getting the UTC seconds
console.log("UTC year",date.getUTCFullYear()); //getting the UTC year
console.log("UTC milliseconds",date.getUTCMilliseconds()); //getting the UTC milliseconds