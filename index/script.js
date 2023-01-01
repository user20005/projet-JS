const progressbar = document.getElementById("bar");

setTimeout(() => changeProgress(1), 10);
setTimeout(() => changeProgress(5), 500);
setTimeout(() => changeProgress(7), 700);
setTimeout(() => changeProgress(10), 1000);
setTimeout(() => changeProgress(20), 3500);
setTimeout(() => changeProgress(40), 4500);
setTimeout(() => changeProgress(50), 6000);
setTimeout(() => changeProgress(70), 8266);
setTimeout(() => changeProgress(90), 10000);
setTimeout(() => changeProgress(95), 12000);
setTimeout(() => changeProgress(98), 14000);
setTimeout(() => changeProgress(100), 16000);

const changeProgress = (bar) => {
  progressbar.style.width = `${bar}%`;
  let loading = document.querySelector(".loading");
  // console.log(bar);
  if (bar < 100) {
    document.getElementById("deuxieme").style.display = "none";
  } else {
    document.getElementById("deuxieme").style.display = "flex";
  }
  if (bar >= 100) {
    document.querySelector(".containerprogress").classList.remove("containerprogress");
    document.querySelector(".bar").classList.remove("bar");
    document.querySelector(".logobas").classList.replace("logobas", "logobas2");
    loading.innerHTML = "LOADING COMPLETED";
    loading.style.fontSize = "60px";

  }
}

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");
let next4 = document.getElementById("next4");

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3")
let back4 = document.getElementById("back4")

next1.onclick = function () {
  form2.style.left = "0px";
  form1.style.left = "-750px";
}

next2.onclick = function () {
  form2.style.left = "-750px";
  form3.style.left = "0px";
}

next3.onclick = function () {
  form3.style.left = "-750px";
  form4.style.left = "0px";
}
next4.onclick = function () {
  form4.style.left = "-750px";
  form5.style.left = "0px";
}

back1.onclick = function () {
  form2.style.left = "750px";
  form1.style.left = "0px";

}
back2.onclick = function () {
  form3.style.left = "750px";
  form2.style.left = "0px";

}
back3.onclick = function () {
  form4.style.left = "750px";
  form3.style.left = "0px";

}
back4.onclick = function () {
  form4.style.left = "0px";
  form5.style.left = "750px";

}

function nick() {
  var nickn = document.getElementById('ninp').value;
  document.getElementById('nick').innerHTML = nickn;
}
function Value1() {
  return document.querySelector('input[name="cpu"]:checked').value;
}
function Value2() {
  return document.querySelector('input[name="height"]:checked').value;
}
function Value3() {
  return document.querySelector('input[name="battery"]:checked').value;
}
function Value4() {
  return document.querySelector('input[name="color"]:checked').value;
}

function cpu1() {
  document.getElementById('value1').textContent = Value1();
}
function height1() {
  document.getElementById('value2').textContent = Value2();


}
function battery1() {
  document.getElementById('value3').textContent = Value3();
}
function color1() {
  document.getElementById('value4').textContent = Value4();
}


let diapo = document.getElementsByClassName("slider-1");
let currentSlide = 0;
function show() {
  document.getElementById("deuximemebis").style.display = 'block'
  document.getElementById("coteg").style.display = "none"
  document.getElementById("coted").style.display = "none"
}
document.getElementById("slide-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
document.getElementById("slide-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});
document.getElementById("slide-close").addEventListener("click", () => {
  document.getElementById("deuximemebis").style.display = 'none'
  document.getElementById("coteg").style.display = "block"
  document.getElementById("coted").style.display = "block"
});

function changeSlide(moveTo) {
  if (moveTo >= diapo.length) { moveTo = 0; }
  if (moveTo < 0) { moveTo = diapo.length - 1; }

  diapo[currentSlide].classList.toggle("active");
  diapo[moveTo].classList.toggle("active");
  currentSlide = moveTo;
}


next3.addEventListener('click', function () {
  var total = 0;
  var cpu = document.getElementsByName('cpu');
  var height = document.getElementsByName('height');
  var battery = document.getElementsByName('battery');
  var color = document.getElementsByName('color');
  for (var i = 0; i < cpu.length; i++) {
    if (cpu[i].checked) {
      total += parseInt(cpu[i].value);
    }
  }
  for (var i = 0; i < height.length; i++) {
    if (height[i].checked) {
      total += parseInt(height[i].value);
    }
  }
  for (var i = 0; i < battery.length; i++) {
    if (battery[i].checked) {
      total += parseInt(battery[i].value);
    }
  }
  for (var i = 0; i < color.length; i++) {
    if (color[i].checked) {
      total += parseInt(color[i].value);
    }
  }
  console.log(total);
  document.getElementById('optiond').innerHTML = total;
});