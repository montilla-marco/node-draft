/*
console.log(); // Global 

setTimeout(); // function takes two parameters. First a function to bexecutes the passed function after given timee executed and second after how much time (in ms).
// executes the passed function after given time. return id variable
clearTimeout(); // clears the timeout which has been set by setTimeout()

setInterval(); // function takes two parameters. First a function to be executed and second after how much time (in ms).
// executes the passed function for the given time interval.  return id variable
clearInterval();//clears the interval which has been set by setInterval
*/
/* clear
 */

let to;
timeOutTime = new Date();
console.log("Time before timeOut is: " + timeOutTime.getMinutes() + ':' + timeOutTime.getSeconds()); // timeOut is: 29:35
to = setTimeout(logTimeOut, 3000);

let ti;
timeInterval = new Date();
console.log("Time before timeInterval is: " + timeInterval.getMinutes() + ':' + timeInterval.getSeconds());
ti = setInterval(logTimeInterval, 3000);


function logTimeOut() {
  timeOutTime = new Date();
  console.log('logTimeOut: ' + timeOutTime.getMinutes() + ':' + timeOutTime.getSeconds()); //logTimeOut: 29:38
  //clearTimeout(to);
}

function logTimeInterval() {
  timeInterval = new Date();
  console.log('logTimeInterval: ' + timeInterval.getMinutes() + ':' + timeInterval.getSeconds());
  //clearInterval(ti);
}

