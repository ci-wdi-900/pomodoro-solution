// work for 5 seconds
// break for 1 second
// repeat
console.log('Time to get to work!');

setTimeout(function() {
  console.log('Break time!!!')
 setInterval(function() {

    console.log('Break time!');
  }, 6000)
}, 5000)

setInterval(function() {
  console.log('Work time!');
}, 6000)
