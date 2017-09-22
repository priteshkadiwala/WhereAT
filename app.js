console.log(__dirname);
console.log(__filename);
var time = 1;
setInterval(function () {
  time =+ 2;
  console.log(time + 'seconds');
}, 2000);
