var countDownDate = new Date("Feb 02,2024 00:00:00 AM").getTime();

var countdownfunction = setInterval(function () {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //hours + " H : "+ minutes + " M : " +
  document.getElementById("wishingtext").innerHTML = hours + " Hr : " + minutes + " Min : " + seconds + " Sec" + "<br><br><br><br><br> Prepared By Hussy ❤️";

  if (distance < 0) {
    clearInterval(countdownfunction);
    const start = () => {
      setTimeout(function () {
        confetti.start()
      }, 1000);
    };
    start();
    document.getElementById("leftname").innerHTML = "Happy Birthday To Swera ❤️ ";
    // document.getElementById("leftname").style = 'transform: scaleX(-1); text-align: center;';
    document.getElementById("head").innerHTML = "Happy Birthday To You"
    document.getElementById("wishingtext").innerHTML = "Having a sister is like having an inseparable best friend,Happy birthday to the best sister to ever live! Birthday cakes are at all times, yummy. But a lovely sister with a big cake is even better! Have a blast on your birthday girl. I am sending you all the love and joy and warmest wishes for a cheerful, smart, and wonderful sister for your birthday.</p>"
    //  document.getElementById("maincard").setAttribute("style",'background-color:red;')
    document.getElementById("maincard").setAttribute("style", 'background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")')
    document.getElementById("backpage").setAttribute("style", 'background-image:url("hussy-sis.jpeg");background-size: cover;')
    var img11 = document.getElementById("birthdaypicturefront");
    img11.src = 'aftertimersmileface.PNG'
  }
}, 1000);
