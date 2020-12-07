function scale() {
  menorah = document.getElementById("menorah");
  menorah.style.transform='translateX(-50%) translateY(-50%) scale(' + 1/Math.max(menorah.clientWidth/window.innerWidth, menorah.clientHeight/window.innerHeight) + ')';
}

window.onresize = scale;

scale();