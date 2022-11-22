const hannukkahFirstDayYear = 2022;
const hannukkahFirstDayMonth = 12;
const hannukkahFirstDayDate = 19; // Day after eve

function scale() {
  menorah = document.getElementById("menorah");

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1;
  if(isAndroid) {
    menorah.style.transform='translateX(-50%) translateY(-50%) scale(' + 0.8/Math.max((menorah.clientWidth+100)/window.innerWidth, menorah.clientHeight/window.innerHeight) + ')';
  } else {
    menorah.style.transform='translateX(-50%) translateY(-50%) scale(' + 1/Math.max((menorah.clientWidth+100)/window.innerWidth, menorah.clientHeight/window.innerHeight) + ')';
  }
}

function light() {
  var SunCalc = window.SunCalc;
  var hanukkahFirstDayTime = new Date(year = hannukkahFirstDayYear, month = hannukkahFirstDayMonth - 1, date = hannukkahFirstDayDate - 1, seconds = 1);

  var lat = 31.771959;
  var lon = 35.217018;
  hanukkahFirstDayTime = new Date(SunCalc.getTimes(hanukkahFirstDayTime, lat, lon).sunset.getTime() - 18*60000);

  setTimeout(function(){ setLight(); }, 1000);
  setInterval(function(){ setLight(); }, 60000);

  fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(response => {
    lat = response.lat;
    lon = response.lon;
    hanukkahFirstDayTime = new Date(SunCalc.getTimes(hanukkahFirstDayTime, lat, lon).sunset.getTime() - 18*60000);
    setLight();
  });

  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    hanukkahFirstDayTime = new Date(SunCalc.getTimes(hanukkahFirstDayTime, lat, lon).sunset.getTime() - 18*60000);
    setLight();
  });

  function setLight() {
    var currentTime = new Date();
    var hannukkahDay = Math.ceil((currentTime - hanukkahFirstDayTime) / 86400000);

    if (hannukkahDay < -1) {
      document.getElementById("heading").innerHTML = 1-hannukkahDay + " days before Chanukah.";
    } else if (hannukkahDay == -1) {
      document.getElementById("heading").innerHTML = 1-hannukkahDay + " day before Chanukah.";
    } else if (hannukkahDay == 0) {
      document.getElementById("heading").innerHTML = "Chag Chanukah Sameach! Today is a Chanukah eve!";
    } else if (hannukkahDay == 1) {
      document.getElementById("heading").innerHTML = "Chag Chanukah Sameach! Today is " + hannukkahDay + "st day of Chanukah!";
    } else if (hannukkahDay == 2) {
      document.getElementById("heading").innerHTML = "Chag Chanukah Sameach! Today is " + hannukkahDay + "nd day of Chanukah!";
    } else if (hannukkahDay == 3) {
      document.getElementById("heading").innerHTML = "Chag Chanukah Sameach! Today is " + hannukkahDay + "rd day of Chanukah!";
    } else if (hannukkahDay <= 8) {
      document.getElementById("heading").innerHTML = "Chag Chanukah Sameach! Today is " + hannukkahDay + "th day of Chanukah!";
    } else {
      document.getElementById("heading").innerHTML = "Chanukah has ended. See you next year!";
    }

    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("three").style.visibility = "hidden";
    document.getElementById("four").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "hidden";
    document.getElementById("six").style.visibility = "hidden";
    document.getElementById("seven").style.visibility = "hidden";
    document.getElementById("eight").style.visibility = "hidden";
    document.getElementById("nine").style.visibility = "hidden";

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
}

window.onresize = scale;
window.onload = scale;
setTimeout(function(){ scale(); }, 1000);

light();
