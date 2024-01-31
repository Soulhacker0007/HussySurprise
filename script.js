var countDownDate = new Date("Feb 24,2023 09:50:00 PM").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                            

 if (distance < 0) 
 {
    clearInterval(countdownfunction);
    document.getElementById("surbtn").disabled="False";
    document.getElementById("box22").innerHTML="Press here For The Surprise";
 }

}, 1000);
