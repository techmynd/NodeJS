var time = 0;
var timer = setInterval(function(){
  time +=1;
console.log(time + ' second(s) have passed ...');
if(time >= 10){
  clearInterval(timer);
  console.log("10 seconds have passed already!");
}
}, 1000);
