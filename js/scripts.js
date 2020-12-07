
const hannukkahFirstDayYear = 2020;
const hannukkahFirstDayMonth = 12;
const hannukkahFirstDayDate = 11;

function scale() {
  menorah = document.getElementById("menorah");
  menorah.style.transform='translateX(-50%) translateY(-50%) scale(' + 1/Math.max(menorah.clientWidth/window.innerWidth, menorah.clientHeight/window.innerHeight) + ')';
}

function light() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    var SunCalc = window.SunCalc;
    var hanukkahFirstDayTime = new Date(year = hannukkahFirstDayYear, month = hannukkahFirstDayMonth - 1, date = hannukkahFirstDayDate - 1, seconds = 1);
    var hanukkahFirstDayTime = new Date(SunCalc.getTimes(hanukkahFirstDayTime, lat, long).sunset.getTime() - 18*60000);

    function setLight() {
      var currentTime = new Date();
      var hannukkahDay = Math.ceil((currentTime - hanukkahFirstDayTime) / 86400000);

      console.log("Day " + hannukkahDay);

      if (hannukkahDay >= 1 && hannukkahDay < 9) {
        document.getElementById("five").style.visibility="visible";
        document.getElementById("one").style.visibility="visible";
      }

      if (hannukkahDay >= 2  && hannukkahDay < 9) {
        document.getElementById("two").style.visibility="visible";
      }

      if (hannukkahDay >= 3 && hannukkahDay < 9) {
        document.getElementById("three").style.visibility="visible";
      }

      if (hannukkahDay >= 4 && hannukkahDay < 9) {
        document.getElementById("four").style.visibility="visible";
      }

      if (hannukkahDay >= 5 && hannukkahDay < 9) {
        document.getElementById("six").style.visibility="visible";
      }

      if (hannukkahDay >= 6 && hannukkahDay < 9) {
        document.getElementById("seven").style.visibility="visible";
      }

      if (hannukkahDay >= 7 && hannukkahDay < 9) {
        document.getElementById("eight").style.visibility="visible";
      }

      if (hannukkahDay >= 8 && hannukkahDay < 9) {
        document.getElementById("nine").style.visibility="visible";
      }
    }

    setLight();
    setInterval(function(){ setLight(); }, 60000);
  });
}

window.onresize = scale;

scale();
light();